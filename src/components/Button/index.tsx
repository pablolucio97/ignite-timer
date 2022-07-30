import { ButtonVariants, Container } from "./styles";


interface ButtonProps {
  variant?: ButtonVariants
}

export function Button({ variant = "primary" }: ButtonProps) {
	return (
		<Container variant={variant}>
      Test
		</Container>
	);
}