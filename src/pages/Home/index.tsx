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
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns"

interface Cycle {
	id: string;
	task: string;
	minutesAmount: number;
	startDate: Date;
}

const newCycleFormValidationScheme = zod.object({
	task: zod.string().min(1, "Informe a tarefa"),
	minutesAmount: zod.number().min(5).max(60)
})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>

export function Home() {

	const [cycles, setCycles] = useState<Cycle[]>([])
	const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
	const [amountSecondsPast, setAmountSecondsPast] = useState(0)

	const { register, watch, handleSubmit, reset } = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationScheme),
		defaultValues: {
			task: "",
			minutesAmount: 0
		}
	})

	const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
	const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0

	const minutesAmount = Math.floor(currentSeconds / 60)
	const secondsAmount = currentSeconds % 60

	const minutes = String(minutesAmount).padStart(2, "0")
	const seconds = String(secondsAmount).padStart(2, "0")

	const task = watch("task")
	const minutesCounter = watch("minutesAmount")

	const isDisabledStartButton = !task || !minutesCounter

	useEffect(() => {

		let timer : number

		if (activeCycle) {
			timer = setInterval(() => {
				setAmountSecondsPast(
					differenceInSeconds(new Date(), activeCycle.startDate));
			}, 1000)
		}

		return () => { clearInterval(timer) }

	}, [activeCycle])

	function handleCreateNewCycle(data: NewCycleFormData) {

		const id = String(new Date().getTime())

		const newCycle: Cycle = {
			id,
			task: data.task,
			minutesAmount: data.minutesAmount,
			startDate: new Date()
		}
		setCycles((state: Cycle[]) => [...state, newCycle])
		setActiveCycleId(id)
		setAmountSecondsPast(0)

		reset()
	}

	useEffect(() => {
		if(activeCycle){
			document.title = `${minutes} : ${seconds}`
		}
	}, [minutes, seconds])

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
					<span>{minutes[0]}</span>
					<span>{minutes[1]}</span>
					<Separator>:</Separator>
					<span>{seconds[0]}</span>
					<span>{seconds[1]}</span>
				</CountdownContainer>
				<StartCountdownButton disabled={isDisabledStartButton} type="submit">
					<Play size={24} />
					Começar
				</StartCountdownButton>
			</form>
		</Container>
	)
}