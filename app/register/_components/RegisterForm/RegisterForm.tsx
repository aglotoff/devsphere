'use client';

import { FC } from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import Link from '@/components/ui/Link';

import { signUp } from '@/lib/auth';

import { RegisterFormData, useRegisterForm } from './hooks/useRegisterForm';
import { Controller } from 'react-hook-form';

export const RegisterForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRegisterForm();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await signUp(data);
      window.location.reload();
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="fullName"
        render={({ field }) => (
          <Input
            className="mt-3"
            errorMessage={errors.fullName?.message}
            placeholder="Full Name"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            className="mt-3"
            errorMessage={errors.email?.message}
            placeholder="Type Email"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            className="mt-3"
            errorMessage={errors.password?.message}
            type="password"
            placeholder="Password"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <Input
            className="mt-3"
            errorMessage={errors.confirmPassword?.message}
            type="password"
            placeholder="Confirm Password"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="acceptTerms"
        render={({ field: { value, ...props } }) => (
          <Checkbox
            className="mt-3"
            isSelected={value}
            {...props}
            errorMessage={errors.acceptTerms?.message}
          >
            <span>
              I agree to DevSphere&apos;s <Link href="#">Terms of Service</Link>{' '}
              and <Link href="#">Privacy Policy</Link>.
            </span>
          </Checkbox>
        )}
      />

      <Button type="submit" className="mt-5 w-full" loading={isSubmitting}>
        Register Now
      </Button>
    </form>
  );
};
