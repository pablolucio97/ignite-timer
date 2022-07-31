import {
	Container,
	FormContainer,
	CountdownContainer,
	Separator,
	StartCountdownButton,
	InputsContainer,
	TaskInput,
	MinutesAmountInput
} from "./styles";
import { Play } from "phosphor-react";

export function Home() {
	return (
		<Container>
			<form action="">
				<FormContainer>
					<InputsContainer>
						<label htmlFor="task">Vou trabalhar em</label>
						<TaskInput
							type="text"
							id='task'
							placeholder='Inicie uma tarefa'
							list="task-suggestions"
						/>
						<datalist id='task-suggestions'>
							<option value="value 1"/>
							<option value="value 2"/>
							<option value="value 3"/>
						</datalist>
						<label htmlFor="minutesAmount">durante</label>
						<MinutesAmountInput
							type="number"
							id='minutesAmount'
							placeholder='00'
						/>
						<span>minutos .</span>
					</InputsContainer>
				</FormContainer>
				<CountdownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountdownContainer>
				<StartCountdownButton disabled type="submit">
					<Play size={24} />
					Começar
				</StartCountdownButton>
			</form>
		</Container>
	)
}