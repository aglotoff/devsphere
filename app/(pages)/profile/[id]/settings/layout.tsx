import { PropsWithChildren } from 'react';

import { SettingsMenu } from '@/widgets/settings-menu';
import { AuthGuardUser } from '@/entities/auth';
import { Card } from '@/shared/ui/Card';
import { Container } from '@/shared/ui/Container';

export interface SettingsLayoutProps {
  params: { id: string };
}

const SettingsLayout = async ({
  children,
  params: { id },
}: PropsWithChildren<SettingsLayoutProps>) => (
  <AuthGuardUser uid={id}>
    <Container className="flex items-start py-12">
      <Card className="w-72 basis-auto grow-0 shrink-0">
        <Card.Header>Your Details</Card.Header>
        <SettingsMenu basePathname={`/profile/${id}/settings`} />
      </Card>

      <div className="ml-6 grow shrink">{children}</div>
    </Container>
  </AuthGuardUser>
);

export default SettingsLayout;
