import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const PersonalSettingsFormSchema = z.object({
  fullName: z.string().min(1, 'This field is required'),
  birthDate: z.string().min(1, 'This field is required'),
  email: z
    .string()
    .min(1, 'This field is required')
    .email('Please enter a correct email address'),
  gender: z.string().min(1, 'This field is required'),
  country: z.string().min(1, 'This field is required'),
  status: z.string(),
  about: z.string(),
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
