import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { WelcomePage } from "./pages/WelcomePage"

export const App = () => {
    return (
        <section className="px-2 mt-2">
            <Routes>
                <Route 
                    path='/'
                    element={<LoginPage/>}
                />
                <Route
                    path="/welcome"
                    element={<WelcomePage/>}
                />
            </Routes>
        </section>
    )
}