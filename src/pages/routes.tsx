import { Routes, Route as Router } from "react-router-dom"
import { History } from "./History"
import { Home } from "./Home"

export function Route() {
	return (
		<Routes>
			<Router path="/" element={<Home/>} />
			<Router path="/history" element={<History/>} />
		</Routes>
	)
}