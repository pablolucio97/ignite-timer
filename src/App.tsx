import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme/theme'
import { GlobalStyle } from './styles/globalstyle'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button variant='primary' />
        <Button variant='secondary' />
        <Button variant='danger' />
        <Button variant='success' />
      </ThemeProvider>
    </div>
  )
}

export default App
