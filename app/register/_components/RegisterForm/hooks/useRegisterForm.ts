import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

export type RegisterFormData = z.infer<typeof RegisterFormSchema>;

export const useRegisterForm = () =>
  useForm<RegisterFormData>({ resolver: zodResolver(RegisterFormSchema) });
