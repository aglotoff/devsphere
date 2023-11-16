import { Metadata, NextPage } from 'next';

import { LoginForm } from '@/features/auth/login-form';
import { AuthLayout, AuthGuardGuest } from '@/entities/auth';
import { Link } from '@/shared/ui/Link';

export const metadata: Metadata = {
  title: 'Login | DevSphere',
};

const Login: NextPage = () => (
  <AuthGuardGuest>
    <AuthLayout
      title="Login Now"
      description="This is a pet project and shouldn't be used for anything serious. Feel free to use a dummy email if you like."
    >
      <LoginForm />

      <div className="mt-8 text-center text-sm text-stone-500">
        Don&apos;t have an account?{' '}
        <Link href="/register" color="primary">
          Register Now
        </Link>
      </div>
    </AuthLayout>
  </AuthGuardGuest>
);

export default Login;
