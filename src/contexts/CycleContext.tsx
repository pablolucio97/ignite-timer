import { differenceInSeconds } from "date-fns";
import { createContext, ReactNode, useEffect, useState, useReducer } from "react";
import { Cycle } from "../pages/Home"
import { addNewCycleAction, interruptCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { CycleProps, CreateCycleData, cyclesReducer } from "../reducers/reducers"


interface ChildrenProps {
	children: ReactNode
}



export const CycleContext = createContext({} as CycleProps)

export const CycleContextProvider = ({ children }: ChildrenProps) => {


	const [cyclesState, dispatch] = useReducer(cyclesReducer, {
		cycles: [],
		activeCycleId: null
	}, () => {
		const storedState = localStorage
			.getItem("@ignite-timer:cyclesState-1.0.0")

		if (storedState) {
			return JSON.parse(storedState)
		}

	})


	const { cycles, activeCycleId } = cyclesState
	const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

	const [amountSecondsPast, setAmountSecondsPast] = useState(() => {

		if (activeCycle) {
			return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
		}

		return 0
	})


	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
	const currentSeconds = activeCycle ? totalSeconds - amountSecondsPast : 0

	const minutesAmount = Math.floor(currentSeconds / 60)
	const secondsAmount = currentSeconds % 60

	const minutes = String(minutesAmount).padStart(2, "0")
	const seconds = String(secondsAmount).padStart(2, "0")

	function markCurrentCycleAsFinished() {
		dispatch(markCurrentCycleAsFinishedAction())
	}

	function setSecondsPast(seconds: number) {
		setAmountSecondsPast(seconds)
	}

	function createNewCycle(data: CreateCycleData) {

		const id = String(new Date().getTime())

		const newCycle: Cycle = {
			id,
			task: data.task,
			minutesAmount: data.minutesAmount,
			startDate: new Date()
		}

		dispatch(addNewCycleAction(newCycle))

		setAmountSecondsPast(0)
	}

	function interruptCycle() {
		dispatch(interruptCycleAction())
	}

	useEffect(() => {

		let timer: number

		if (activeCycle) {
			timer = setInterval(() => {
				const secondsDifference = differenceInSeconds(
					new Date(), new Date(activeCycle.startDate)
				);

				if (secondsDifference > totalSeconds) {
					markCurrentCycleAsFinished()
					clearInterval(timer)

				} else {
					setAmountSecondsPast(secondsDifference)
				}
			}, 1000)
		}

		return () => { clearInterval(timer) }

	}, [activeCycle, totalSeconds, activeCycleId])

	useEffect(() => {
		if (activeCycle) {
			document.title = `${minutes} : ${seconds}`
		} else {
			document.title = "Ignite Timer"
		}
	}, [minutes, seconds])

	useEffect(() => {
		const data = JSON.stringify(cyclesState)
		localStorage.setItem("@ignite-timer:cyclesState-1.0.0", data)
	}, [cyclesState])

	return (
		<CycleContext.Provider value={{
			cycles,
			activeCycle,
			activeCycleId,
			amountSecondsPast,
			minutes,
			seconds,
			totalSeconds,
			markCurrentCycleAsFinished,
			createNewCycle,
			interruptCycle,
			setSecondsPast
		}}>
			{children}
		</CycleContext.Provider>
	)
}