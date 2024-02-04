import { Card as MyCard, Title, Flex, Input, Textarea, Select, Button } from '@mantine/core';
import classes from './Card.module.css';

export default function Card() {
  return (
    <Flex gap="lg">
      <MyCard padding="xl" radius="md" w={420} className={classes.card}>
        <Flex direction="column" gap="lg">
          <Title order={2}>Select</Title>
          <Flex direction="column" gap="lg">
            <Input.Wrapper label="First name" size="md">
              <Input size="md" radius="md" />
            </Input.Wrapper>

            <Input.Wrapper label="Last name" description="Enter your last name here" size="md">
              <Input size="md" radius="md" />
            </Input.Wrapper>

            <Input.Wrapper label="Email" size="md">
              <Input size="md" radius="md" />
            </Input.Wrapper>

            <Select
              size="md"
              radius="md"
              description="What is your favorite article of clothing?"
              label="What is your favorite?"
              placeholder="Pick one"
              data={['Shirt', 'Pants', 'Socks', 'Shoes']}
            />

            <Textarea size="md" radius="md" label="Comments" />
          </Flex>

          <Button color="blue" fullWidth mt="md" radius="md">
            Learn More
          </Button>
        </Flex>
      </MyCard>
      <MyCard padding="xl" radius="md" w={420} className={classes.card}>
        <Flex direction="column" gap="lg">
          <Title order={2}>Select</Title>
          <Flex direction="column" gap="lg">
            <Select
              size="md"
              radius="md"
              description="Input description"
              label="Medium"
              placeholder="Pick value"
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />

            <Select
              size="sm"
              radius="md"
              description="Input description"
              label="Small"
              placeholder="Pick value"
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />

            <Select
              size="xs"
              radius="md"
              description="Input description"
              label="Xtra Small"
              placeholder="Pick value"
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />
          </Flex>

          <Button color="blue" fullWidth mt="md" radius="md">
            Learn More
          </Button>
        </Flex>
      </MyCard>
    </Flex>
  );
}
