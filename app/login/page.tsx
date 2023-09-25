import { Metadata, NextPage } from 'next';

import SigningLayout from '@/app/_components/layout/SigningLayout';
import LoggedOut from '@/app/_components/auth/LoggedOut';
import Link from '@/app/_components/ui/Link';

import LoginForm from './_components/LoginForm';

export const metadata: Metadata = {
  title: 'Login | DevSphere',
};

const Login: NextPage = () => (
  <LoggedOut>
    <SigningLayout
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
    </SigningLayout>
  </LoggedOut>
);

export default Login;
