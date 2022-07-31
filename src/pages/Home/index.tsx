import { Container, FormContainer, CountdownContainer, Separator } from "./styles";
import { Play } from "phosphor-react";

export function Home() {
	return (
		<Container>
			<form action="">
				<FormContainer>
					<label htmlFor="task">Vou trabalhar em</label>
					<input type="text" id='task' />
					<label htmlFor="minutesAmount">durante</label>
					<input type="number" id='minutesAmount' />
					<span>minutos .</span>
				</FormContainer>
				<CountdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountdownContainer>
				<button type="submit">
					Começar
					<Play size={24} />
				</button>
			</form>
		</Container>
	)
}