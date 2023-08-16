import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Hello World!</p>
    </ThemeProvider>
  )
}
