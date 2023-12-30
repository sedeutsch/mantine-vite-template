import { Flex } from '@mantine/core';
import Card from '../components/Card';
import './Home.page.css';

export function HomePage() {
  return (
    <>
      <Flex p={64} justify="center" align="center">
        <Card />
      </Flex>
    </>
  );
}
