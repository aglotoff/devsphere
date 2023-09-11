'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

import Button from '@/components/ui/Button';
import FormItem from '@/components/ui/FormItem';
import Input from '@/components/ui/Input';

import { signIn } from '@/lib/auth';

const LoginFormSchema = z.object({
  email: z.string().min(1, 'This field is required'),
  password: z.string().min(1, 'This field is required'),
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(LoginFormSchema) });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem error={errors.email?.message}>
        <Input
          type="text"
          placeholder="Type email"
          {...register('email', { required: true })}
        />
      </FormItem>

      <FormItem className="mt-3" error={errors.password?.message}>
        <Input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
      </FormItem>

      <Button type="submit" className="mt-5" loading={isSubmitting}>
        Login Now
      </Button>
    </form>
  );
};
