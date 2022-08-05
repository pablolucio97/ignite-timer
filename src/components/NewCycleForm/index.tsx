import { useFormContext } from "react-hook-form";
import { useCycle } from "../../hooks/useCycle"

import {
	FormContainer,
	InputsContainer,
	MinutesAmountInput,
	TaskInput
} from "./styles";



export function NewCycleForm() {

	const { activeCycle } = useCycle()
	const { register } = useFormContext()

	return (
		<FormContainer>
			<InputsContainer>
				<label htmlFor="task">Vou trabalhar em</label>
				<TaskInput
					type="text"
					id='task'
					placeholder='Inicie uma tarefa'
					disabled={!!activeCycle}
					list="task-suggestions"
					{...register("task")}
				/>
				<datalist id='task-suggestions'>
					<option value="value 1" />
					<option value="value 2" />
					<option value="value 3" />
				</datalist>
				<label htmlFor="minutesAmount">durante</label>
				<MinutesAmountInput
					type="number"
					id='minutesAmount'
					placeholder='00'
					disabled={!!activeCycle}
					min={0}
					max={60}
					step={5}
					{...register("minutesAmount", { valueAsNumber: true })}
				/>
				<span>minutos .</span>
			</InputsContainer>
		</FormContainer>
	)
}