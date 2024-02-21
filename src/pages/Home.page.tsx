import { Container, Flex, Title, Radio, Text, Button, Input, ActionIcon } from '@mantine/core';
import SelectDropdownSearch from '../components/SelectDropdownSearch';
import { IconAdjustments } from '@tabler/icons-react';
import { Faders } from '@phosphor-icons/react';
import './Home.page.css';

export function HomePage() {
  return (
    <>
      <Container size="xs" p={64}>
        <Flex gap="md" direction="column">
          <Title>Hi there</Title>
          <Flex gap="sm" align="center">
            <Text>Phosphor</Text>
            <ActionIcon variant="filled" size="sm">
              <Faders size={12} weight="regular" />
            </ActionIcon>
            <ActionIcon variant="filled" size="md">
              <Faders weight="regular" />
            </ActionIcon>
            <Text>Tabler</Text>
            <ActionIcon variant="filled" size="md">
              <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="filled" size="md">
              <IconAdjustments />
            </ActionIcon>
            <Text>Heatmap</Text>
            <ActionIcon variant="light" size="xs" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="sm" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
          </Flex>
          <Flex gap={4}>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
            <ActionIcon variant="light" size="md" color="green">
              <Text size="sm">1</Text>
            </ActionIcon>
          </Flex>
          <Text size="sm">
            There are some things that I want to note that you should be aware of. I think it is
            very important that things like this are talked about.
          </Text>
          <Radio.Group label="Professional designation">
            <Flex direction="column" gap="xs">
              <Radio value="mddo" label="MD/DO" />
              <Radio value="np" label="NP" />
              <Radio value="pa" label="PA" />
            </Flex>
          </Radio.Group>
          <Input.Wrapper size="sm" label="First name">
            <Input radius="md" />
          </Input.Wrapper>
          <Input.Wrapper size="sm" label="Last name">
            <Input radius="md" />
          </Input.Wrapper>
          <Input.Wrapper size="sm" label="Email">
            <Input radius="md" />
          </Input.Wrapper>
          <Input.Wrapper size="sm" label="Your favorite fruit">
            <SelectDropdownSearch />
          </Input.Wrapper>
          <Button radius="md">Submit</Button>
        </Flex>
      </Container>
    </>
  );
}
