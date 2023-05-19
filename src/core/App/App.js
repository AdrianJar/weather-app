import { Normalize } from "styled-normalize"
import WeatherApp from "../../feature/WeatherApp/WeathreApp"
import { GlobalStyles } from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./theme"
import { Provider } from "react-redux"
import store from "../../store"

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <Normalize />
                <WeatherApp />
            </ThemeProvider>
        </Provider>
    )
}

export default App