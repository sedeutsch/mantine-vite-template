import { Card as MyCard, Title, Flex, Select, Button } from '@mantine/core';
import classes from './Card.module.css';

export default function Card() {
  return (
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
  );
}
