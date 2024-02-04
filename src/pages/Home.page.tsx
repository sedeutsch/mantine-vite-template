import { Flex } from '@mantine/core';
import Input from '../components/Input';
import './Home.page.css';

export function HomePage() {
  return (
    <>
      <Flex p={64} justify="flex-start" align="flex-start" direction="column" gap="xl">
        Hi there
        <Input />
      </Flex>
    </>
  );
}
