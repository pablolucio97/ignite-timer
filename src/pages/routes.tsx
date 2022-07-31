import { Routes, Route as Router } from "react-router-dom"
import { DefaultLayout } from "../layout/DefaultLayout"
import { History } from "./History"
import { Home } from "./Home"

export function Route() {
	return (
		<Routes>
			<Router path='/' element={<DefaultLayout />}>
				<Router path="/" element={<Home />} />
				<Router path="/history" element={<History />} />
			</Router>
		</Routes>
	)
}