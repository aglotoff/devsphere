'use client';

import { getData as getCountryList } from 'country-list';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { parseDate } from '@internationalized/date';

import { profileModel } from '@/entities/profile';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { DatePicker } from '@/shared/ui/DatePicker';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';
import { TextArea } from '@/shared/ui/TextArea';
import { toast } from '@/shared/ui/ToastContainer';

import { SettingsPersonalFormData, useSettingsPersonalForm } from '../model';
import { updatePersonalSettings } from '../api';

export const SettingsPersonalForm: FC = () => {
  const { profile, update } = profileModel.useCurrentProfile();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useSettingsPersonalForm({
    about: profile.about,
    birthDate: profile.birthDate,
    city: profile.city,
    country: profile.country,
    email: profile.email,
    fullName: profile.fullName,
    gender: profile.gender,
    phone: profile.phone,
    status: profile.status,
  });

  const onSubmit = async (data: SettingsPersonalFormData) => {
    try {
      await updatePersonalSettings(data);
      update(data);
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Card.Header>Personal Info</Card.Header>
        <Card.Content>
          <div className="grid grid-cols-6 gap-x-7 gap-y-3.5">
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <Input
                  label="Full Name*"
                  errorMessage={errors.fullName?.message}
                  className="col-span-3"
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="birthDate"
              render={({ field: { value, onChange, ...props } }) => (
                <DatePicker
                  label="Date of Birth*"
                  className="col-span-3"
                  errorMessage={errors.birthDate?.message}
                  value={value ? parseDate(value) : null}
                  onChange={(v) => onChange(v?.toString() ?? '')}
                  {...props}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  label="Email Address*"
                  errorMessage={errors.email?.message}
                  className="col-span-3"
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  label="Phone Number"
                  errorMessage={errors.phone?.message}
                  className="col-span-3"
                  {...field}
                />
              )}
            />

            <Controller
              control={control}
              name="gender"
              render={({ field: { onChange, onBlur, value, ...props } }) => (
                <Select
                  className="col-span-3"
                  label="Gender*"
                  errorMessage={errors.gender?.message}
                  selectedKey={value}
                  onSelectionChange={onChange}
                  onBlur={onBlur}
                  {...props}
                >
                  <Select.Item key="male">Male</Select.Item>
                  <Select.Item key="female">Female</Select.Item>
                </Select>
              )}
            />

            <Controller
              control={control}
              name="status"
              render={({ field: { onChange, onBlur, value, ...props } }) => (
                <Select
                  className="col-span-3"
                  label="Status"
                  selectedKey={value}
                  onSelectionChange={onChange}
                  errorMessage={errors.status?.message}
                  onBlur={onBlur}
                  {...props}
                >
                  <Select.Item key="single">Single</Select.Item>
                  <Select.Item key="relationship">
                    In a relationship
                  </Select.Item>
                  <Select.Item key="married">Married</Select.Item>
                </Select>
              )}
            />

            <Controller
              control={control}
              name="country"
              render={({ field: { onChange, onBlur, value, ...props } }) => (
                <Select
                  className="col-span-3"
                  label="Country*"
                  selectedKey={value}
                  onSelectionChange={onChange}
                  onBlur={onBlur}
                  errorMessage={errors.country?.message}
                  {...props}
                >
                  {getCountryList().map(({ name, code }) => (
                    <Select.Item key={code}>{name}</Select.Item>
                  ))}
                </Select>
              )}
            />

            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <Input
                  label="City*"
                  errorMessage={errors.city?.message}
                  className="col-span-3"
                  {...field}
                />
              )}
            />
          </div>
        </Card.Content>
      </Card>

      <Card className="mt-7">
        <Card.Header>About Description</Card.Header>
        <Card.Content>
          <Controller
            control={control}
            name="about"
            render={({ field }) => (
              <TextArea
                label="Description Here"
                errorMessage={errors.about?.message}
                {...field}
              />
            )}
          />
        </Card.Content>
      </Card>

      <Button type="submit" className="mt-10" loading={isSubmitting}>
        Save Changes
      </Button>
    </form>
  );
};
