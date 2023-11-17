import { Metadata, NextPage } from 'next';

import { RegisterForm } from '@/features/auth/register-form';
import { AuthLayout, AuthGuardGuest } from '@/entities/auth';
import { Link } from '@/shared/ui/Link';

export const metadata: Metadata = {
  title: 'Register | DevSphere',
};

const RegisterPage: NextPage = () => (
  <AuthGuardGuest>
    <AuthLayout
      title="Register Now"
      description="This is a pet project and shouldn't be used for anything serious. Feel free to use a dummy email if you like."
    >
      <h2 className="text-center text-lg text-black font-bold mb-10">
        Sign Up to DevSphere
      </h2>

      <RegisterForm />

      <div className="mt-8 text-center text-sm text-stone-500">
        Already have an account?{' '}
        <Link href="/login" color="primary">
          Login Now
        </Link>
      </div>
    </AuthLayout>
  </AuthGuardGuest>
);

export default RegisterPage;
