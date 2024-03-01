import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Page404 from "./pages/Page404";
import { ThemeProvider } from "./contexts/theme-context";



function AppRoutes() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/profile/:pokemonId" element={<Profile />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default AppRoutes
