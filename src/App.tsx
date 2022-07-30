import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyle } from "./styles/globalstyle";
import { Route } from "./pages/routes";
import { BrowserRouter } from "react-router-dom"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Route />
				<GlobalStyle />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
