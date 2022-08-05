import { Play, Pause } from "phosphor-react";
import { useCycle } from "../../hooks/useCycle"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { FormProvider, useForm } from "react-hook-form"

import { NewCycleForm } from "../../components/NewCycleForm";
import { Countdown } from "../../components/Countdown";
import {
	Container,
	StartCountdownButton,
	StopCountdownButton,
} from "./styles";

export interface Cycle {
	id: string;
	task: string;
	minutesAmount: number;
	startDate: Date;
	interruptedDate?: Date;
	finishedDate?: Date;
}

const newCycleFormValidationScheme = zod.object({
	task: zod.string().min(1, "Informe a tarefa"),
	minutesAmount: zod.number().min(5).max(60)
})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>

export function Home() {

	const {
		activeCycle,
		createNewCycle,
		interruptCycle,
	} = useCycle()

	const newCycleForm = useForm<NewCycleFormData>({
		resolver: zodResolver(newCycleFormValidationScheme),
		defaultValues: {
			task: "",
			minutesAmount: 0
		}
	})

	const { watch, handleSubmit, reset } = newCycleForm

	const task = watch("task")
	const minutesCounter = watch("minutesAmount")

	const isDisabledStartButton = !task || !minutesCounter

	function handleCreateNewCycle(data: NewCycleFormData) {
		createNewCycle(data)
		reset()
	}

	return (
		<Container>
			<form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
				<FormProvider {...newCycleForm}>
					<NewCycleForm />
				</FormProvider>
				<Countdown />
				{!activeCycle ?
					<StartCountdownButton disabled={isDisabledStartButton} type="submit">
						<Play size={24} />
						Começar
					</StartCountdownButton>
					:
					<StopCountdownButton onClick={interruptCycle}>
						<Pause size={24} />
						Pausar
					</StopCountdownButton>
				}
			</form>
		</Container>
	)
}