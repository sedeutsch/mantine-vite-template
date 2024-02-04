import { Input, createPolymorphicComponent } from '@mantine/core';
import './Input.module.css';

interface MyInputProps extends BoxProps {
  label: string;
}

const MyInput = createPolymorphicComponent<'button', MyInputProps>(
  
) {
  return <MyInput label="Input label" description="Input description" />;
}

export default Input;
