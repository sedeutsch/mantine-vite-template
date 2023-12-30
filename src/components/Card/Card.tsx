import { Card as MyCard, Group, Text, Title, Select, Button } from '@mantine/core';
import classes from './Card.module.css';

export default function Card() {
  return (
    <MyCard padding="xl" radius="md" w={420} className={classes.card}>
      <Group gap="sm">
        <Title order={4}>Norway Fjord Adventures</Title>
        <Text size="sm">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>
        <Select
          label="Your favorite library"
          placeholder="Pick value"
          data={['React', 'Angular', 'Vue', 'Svelte']}
        />

        <Button color="blue" fullWidth mt="md" radius="md">
          Learn More
        </Button>
      </Group>
    </MyCard>
  );
}
