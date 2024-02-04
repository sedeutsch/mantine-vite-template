import { Container, Flex, Title, Radio, Text, Button, Input, Group } from '@mantine/core';
import SelectDropdownSearch from '../components/SelectDropdownSearch';
import './Home.page.css';

export function HomePage() {
  return (
    <>
      <Container size="xs" p={64}>
        <Flex gap="md" direction="column">
          <Title>Hi there</Title>
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
            <Input />
          </Input.Wrapper>
          <Input.Wrapper size="sm" label="Last name">
            <Input />
          </Input.Wrapper>
          <Input.Wrapper size="sm" label="Email">
            <Input />
          </Input.Wrapper>
          <Input.Wrapper size="sm" label="Your favorite fruit">
            <SelectDropdownSearch />
          </Input.Wrapper>
          <Button>Submit</Button>
        </Flex>
      </Container>
    </>
  );
}
