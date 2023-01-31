import { CssBaseline, ThemeProvider } from '@mui/material'

import { MainLayout } from '../components/layout/MainLayout'
import { MainPage } from '../components/MainPage'
import { darkTheme } from '../themes/darkTheme'

export const App = () => {
  
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <MainLayout>
                <MainPage />
            </MainLayout>
        </ThemeProvider>
    )
}
