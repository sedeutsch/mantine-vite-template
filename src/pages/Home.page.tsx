import { Flex } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Flex direction="column" gap="sm">
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
      </Flex>
    </>
  );
}
