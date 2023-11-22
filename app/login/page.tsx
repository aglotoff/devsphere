import { Metadata, NextPage } from 'next';

import { AuthLayout } from '@/widgets/auth-layout';
import { LoginForm } from '@/features/auth/login-form';
import { ViewerGuardGuest } from '@/entities/viewer';
import { Link } from '@/shared/ui/Link';

export const metadata: Metadata = {
  title: 'Login | DevSphere',
};

const LoginPage: NextPage = () => (
  <ViewerGuardGuest>
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
  </ViewerGuardGuest>
);

export default LoginPage;
