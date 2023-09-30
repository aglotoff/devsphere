import { Metadata, NextPage } from 'next';

import PersonalSettingsForm from './_components/PersonalSettingsForm';

export const metadata: Metadata = {
  title: 'Profile Settings | DevSphere',
};

const Settings: NextPage = () => <PersonalSettingsForm />;

export default Settings;
