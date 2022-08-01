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
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useState } from "react";

interface Cycle {
	id: string;
	task: string;
	minutesAmount: number;
}

const newCycleFormValidationScheme = zod.object({
	task: zod.string().min(1, "Informe a tarefa"),
	minutesAmount: zod.number().min(5).max(60)
})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>

export function Home() {

	const [cycles, setCycles] = useState<Cycle[]>([])
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

	const { register, watch, handleSubmit, reset } = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationScheme),
		defaultValues: {
			task: "",
			minutesAmount: 0
		}
	})

	function handleCreateNewCycle(data: NewCycleFormData) {

		const id = String(new Date().getTime())

		const newCycle: Cycle = {
			id,
			task: data.task,
			minutesAmount: data.minutesAmount
		}

		console.log(newCycle.id)
		
		setCycles((state: Cycle[]) => [...state, newCycle])
		setActiveCycleId(id)
		
		console.log(activeCycleId)

		reset()
	}


	const task = watch("task")
	const minutesCounter = watch("minutesAmount")

	const isDisabledStartButton = !task || !minutesCounter
	return (
		<Container>
			<form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
				<FormContainer>
					<InputsContainer>
						<label htmlFor="task">Vou trabalhar em</label>
						<TaskInput
							type="text"
							id='task'
							placeholder='Inicie uma tarefa'
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
							min={0}
							max={60}
							step={5}
							{...register("minutesAmount", { valueAsNumber: true })}
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
				<StartCountdownButton disabled={isDisabledStartButton} type="submit">
					<Play size={24} />
					Começar
				</StartCountdownButton>
			</form>
		</Container>
	)
}