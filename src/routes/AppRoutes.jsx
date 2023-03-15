import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainfooter from "../components/footer/Mainfooter"
import NavBar from "../components/header/NavBar"
import Login from "../components/login/Login"
import RegisterUser from "../components/login/RegisterUser"
import MainContainer from "../components/main/MainContainer"
import ProductDescription from "../components/main/ProductDescription"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRoutes = () => {
    const [isLoogged, setIsLoogged] = useState(false);

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, user => {
            user?.uid ? setIsLoogged(true) : setIsLoogged(false)
        })
    }, [setIsLoogged])


    return (
        <>
            <NavBar isLoogged={isLoogged} />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRoutes>
                            <Login isAuthenticated={isLoogged} />
                        </PublicRoutes>
                    } />

                    <Route path="/registro" element={
                        <PublicRoutes>
                            <RegisterUser isAuthenticated={isLoogged} />
                        </PublicRoutes>
                    } />

                    <Route path="/*" element={
                        <PublicRoutes>
                            <MainContainer isAuthenticated={isLoogged} />
                        </PublicRoutes>
                    } />

                    <Route path="/descriptionProducto" element={
                        <ProductDescription />
                    }/>
                </Routes>
            </BrowserRouter>
            <Mainfooter />
        </>
    )
}
