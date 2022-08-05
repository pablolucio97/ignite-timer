import { Cycle } from "../../pages/Home";


export function addNewCycleAction(newCycle: Cycle) {
	return {
		type: "ADD_NEW_CYCLE",
		payload: {
			newCycle
		}
	}
}

export function markCurrentCycleAsFinishedAction() {
	return {
		type: "MARK_CURRENT_CYCLE_AS_FINISHED"
	}
}

export function interruptCycleAction() {
	return {
		type: "INTERRUPT_CURRENT_CYCLE"
	}
}