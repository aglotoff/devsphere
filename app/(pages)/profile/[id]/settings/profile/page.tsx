import { Metadata, NextPage } from 'next';

import { Card } from '@/shared/ui/Card';

export const metadata: Metadata = {
  title: 'Profile Settings | DevSphere',
};

const SettingsProfilePage: NextPage = () => (
  <form>
    <Card>
      <Card.Header>Profile</Card.Header>
      <Card.Content>...</Card.Content>
    </Card>
  </form>
);

export default SettingsProfilePage;
