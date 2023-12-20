import { useState } from 'react';
import { Radio, Text, UnstyledButton, Flex } from '@mantine/core';
// import classes from './Welcome.module.css';
import classes from './CheckboxCard.module.css';

export function Welcome() {
  const [value, onChange] = useState(true);
  return (
    <>
      <Text ta="center" size="lg" maw={400} mx="auto">
        <UnstyledButton onClick={() => onChange(!value)} className={classes.button}>
          <Radio checked={value} onChange={() => {}} tabIndex={-1} size="xs" mr="lg" aria-hidden />

          <Flex gap="sm">
            <Text size="md">A.</Text>
            <Text size="md">Some sort of answer goes here</Text>
          </Flex>
        </UnstyledButton>
      </Text>
    </>
  );
}
