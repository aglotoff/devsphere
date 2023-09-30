import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const PersonalSettingsFormSchema = z.object({
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

export type PersonalSettingsFormData = z.infer<
  typeof PersonalSettingsFormSchema
>;

export const usePersonalSettingsForm = (
  defaultValues?: Partial<PersonalSettingsFormData>
) =>
  useForm<PersonalSettingsFormData>({
    defaultValues,
    resolver: zodResolver(PersonalSettingsFormSchema),
  });
