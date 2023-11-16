import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SettingsPersonalFormSchema = z.object({
  fullName: z
    .string({ required_error: 'This field is required' })
    .min(1, 'This field is required'),
  birthDate: z
    .string({ required_error: 'This field is required' })
    .min(1, 'This field is required'),
  email: z
    .string({ required_error: 'This field is required' })
    .email('Please enter a correct email address'),
  gender: z
    .string({ required_error: 'This field is required' })
    .min(1, 'This field is required'),
  country: z
    .string({ required_error: 'This field is required' })
    .min(1, 'This field is required'),
  status: z.optional(z.string()),
  about: z.optional(z.string()),
  phone: z.optional(z.string()),
  city: z
    .string({ required_error: 'This field is required' })
    .min(1, 'This field is required'),
});

export type SettingsPersonalFormData = z.infer<
  typeof SettingsPersonalFormSchema
>;

export const useSettingsPersonalForm = (
  defaultValues?: Partial<SettingsPersonalFormData>
) =>
  useForm<SettingsPersonalFormData>({
    defaultValues,
    resolver: zodResolver(SettingsPersonalFormSchema),
  });
