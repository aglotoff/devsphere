'use client';

import { FC } from 'react';
import toast from 'react-hot-toast';
import { Controller } from 'react-hook-form';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import TextArea from '@/components/ui/TextArea';

import { useAuthState } from '@/lib/auth';

import {
  // PersonalSettingsFormData,
  usePersonalSettingsForm,
} from './hooks/usePersonalSettingsForm';

import countries from './countries';

export const PersonalSettingsForm: FC = () => {
  const { user } = useAuthState();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = usePersonalSettingsForm({
    fullName: user?.displayName ?? undefined,
    email: user?.email ?? undefined,
  });

  const onSubmit = async () => {
    try {
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
              render={({ field }) => (
                <Input
                  label="Date of Birth*"
                  errorMessage={errors.birthDate?.message}
                  className="col-span-3"
                  {...field}
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

            <Input className="col-span-3" label="Phone Number*" />

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
                  className="col-span-2"
                  label="Country*"
                  selectedKey={value}
                  onSelectionChange={onChange}
                  onBlur={onBlur}
                  {...props}
                >
                  {countries.map(({ name, code }) => (
                    <Select.Item key={code}>{name}</Select.Item>
                  ))}
                </Select>
              )}
            />

            <Input className="col-span-2" label="State" />

            <Input className="col-span-2" label="City*" />
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
