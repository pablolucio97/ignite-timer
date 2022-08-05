import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyle } from "./styles/globalstyle";
import { Route } from "./pages/routes";
import { BrowserRouter } from "react-router-dom"
import { CycleContextProvider } from "./contexts/CycleContext";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CycleContextProvider>
				<BrowserRouter>
					<Route />
					<GlobalStyle />
				</BrowserRouter>
			</CycleContextProvider>
		</ThemeProvider>
	);
}

export default App;
