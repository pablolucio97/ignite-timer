import { produce } from "immer"
import { Cycle } from "../pages/Home"


export interface CreateCycleData {
	task: string;
	minutesAmount: number;
}

export interface CycleProps {
	cycles: Cycle[];
	activeCycle: Cycle | undefined;
	activeCycleId: string | null;
	amountSecondsPast: number;
	minutes: string;
	seconds: string;
	totalSeconds: number;
	setSecondsPast: (seconds: number) => void;
	markCurrentCycleAsFinished: () => void;
	createNewCycle: (data: CreateCycleData) => void;
	interruptCycle: () => void;
}

interface CyclesStateReducer {
	cycles: Cycle[];
	activeCycleId: string | null;
}

export function cyclesReducer(state: CyclesStateReducer, action: any) {

	switch (action.type) {
	case "ADD_NEW_CYCLE":
		return produce(state, draft => {
			draft.cycles.push(action.payload.newCycle)
			draft.activeCycleId = action.payload.newCycle.id
		})
	case "INTERRUPT_CURRENT_CYCLE": {
		const currentCycleIndex = state.cycles
			.findIndex(cycle => {
				return cycle.id === state.activeCycleId
			})

		if (currentCycleIndex < 0) {
			return state
		}

		return produce(state, draft => {
			draft.activeCycleId = null
			draft.cycles[currentCycleIndex].interruptedDate = new Date()
		})
	}

	case "MARK_CURRENT_CYCLE_AS_FINISHED": {
		const currentCycleIndex = state.cycles
			.findIndex(cycle => {
				return cycle.id === state.activeCycleId
			})

		if (currentCycleIndex < 0) {
			return state
		}

		return produce(state, draft => {
			draft.activeCycleId = null
			draft.cycles[currentCycleIndex].finishedDate = new Date()
		})
	}
	default:
		return state
	}
}