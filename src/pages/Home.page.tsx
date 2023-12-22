import { Flex } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import './Home.page.css';

export function HomePage() {
  return (
    <>
      <Flex direction="column" mt="xl">
        <Flex justify="center" align="center" h={256} gap="xl">
          <Flex className="shadowBox shadowXL">XL</Flex>
          <Flex className="shadowBox shadowLG">LG</Flex>
          <Flex className="shadowBox shadowMD">MD</Flex>
          <Flex className="shadowBox shadowSM">SM</Flex>
          <Flex className="shadowBox shadowXS">XS</Flex>
        </Flex>
        {/* <Flex direction="column" gap="sm">
          <Welcome />
          <Welcome />
          <Welcome />
          <Welcome />
        </Flex> */}
      </Flex>
    </>
  );
}
