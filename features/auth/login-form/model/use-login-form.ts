import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const LoginFormSchema = z.object({
  email: z.string().min(1, 'This field is required'),
  password: z.string().min(1, 'This field is required'),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;

export const useLoginForm = () =>
  useForm<LoginFormData>({ resolver: zodResolver(LoginFormSchema) });
