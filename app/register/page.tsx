import { Metadata, NextPage } from 'next';

import SigningLayout from '@/app/_components/layout/SigningLayout';
import LoggedOut from '@/app/_components/auth/LoggedOut';
import Link from '@/app/_components/ui/Link';

import RegisterForm from './_components/RegisterForm';

export const metadata: Metadata = {
  title: 'Register | DevSphere',
};

const Register: NextPage = () => (
  <LoggedOut>
    <SigningLayout
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
    </SigningLayout>
  </LoggedOut>
);

export default Register;
