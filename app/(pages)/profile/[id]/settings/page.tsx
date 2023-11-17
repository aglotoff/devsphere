import { Metadata, NextPage } from 'next';
import { SettingsPersonalForm } from '@/features/settings/personal';

export const metadata: Metadata = {
  title: 'Profile Settings | DevSphere',
};

const SettingsPage: NextPage = () => <SettingsPersonalForm />;

export default SettingsPage;
