import { useContext } from "react"
import { CycleContext } from "../contexts/CycleContext"

export function useCycle() {
	const useCycle = useContext(CycleContext)
	return useCycle
}