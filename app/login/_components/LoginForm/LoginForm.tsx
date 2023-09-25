'use client';

import { FC } from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

import { signIn } from '@/lib/auth';

import { useLoginForm, LoginFormData } from './hooks/useLoginForm';
import { Controller } from 'react-hook-form';

export const LoginForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginForm();

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signIn(data);
      window.location.reload();
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            placeholder="Type email"
            errorMessage={errors.email?.message}
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

      <Button type="submit" className="mt-5 w-full" loading={isSubmitting}>
        Login Now
      </Button>
    </form>
  );
};
