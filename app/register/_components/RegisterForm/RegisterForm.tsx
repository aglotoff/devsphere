'use client';

import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormItem from '@/components/ui/FormItem';
import Input from '@/components/ui/Input';
import Link from '@/components/ui/Link';

import { signUp } from '@/lib/auth';

const RegisterFormSchema = z
  .object({
    fullName: z.string().min(1, 'This field is required'),
    email: z
      .string()
      .min(1, 'This field is required')
      .email('Please enter a correct email address'),
    password: z
      .string()
      .min(8, 'The password must be at least 8 characters long')
      .regex(
        /^[a-zA-Z0-9]+$/,
        'The password must consist only of letters and digits'
      )
      .regex(/[0-9]/, 'The password must contain at least one digit')
      .regex(/[a-z]/, 'The password must contain at least one lowercase letter')
      .regex(
        /[A-Z]/,
        'The password must contain at least one uppercase letter'
      ),
    confirmPassword: z
      .string()
      .min(8, 'The password must be at least 8 characters long'),
    acceptTerms: z.literal(true, {
      errorMap: () => ({
        message: 'You must agree to our Terms of Service and Privacy Policy',
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof RegisterFormSchema>;

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({ resolver: zodResolver(RegisterFormSchema) });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      await signUp(data);
    } catch (error) {
      toast.error(String(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem error={errors.fullName?.message}>
        <Input type="text" placeholder="Full name" {...register('fullName')} />
      </FormItem>

      <FormItem className="mt-3" error={errors.email?.message}>
        <Input type="text" placeholder="Type email" {...register('email')} />
      </FormItem>

      <FormItem className="mt-3" error={errors.password?.message}>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
      </FormItem>

      <FormItem className="mt-3" error={errors.confirmPassword?.message}>
        <Input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword')}
        />
      </FormItem>

      <FormItem className="mt-2" error={errors.acceptTerms?.message}>
        <Checkbox
          label={
            <span>
              I agree to DevSphere&apos;s <Link href="#">Terms of Service</Link>{' '}
              and <Link href="#">Privacy Policy</Link>.
            </span>
          }
          {...register('acceptTerms')}
        />
      </FormItem>

      <Button type="submit" className="mt-5" loading={isSubmitting}>
        Register Now
      </Button>
    </form>
  );
};
