"use client"

import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

import { useEffect} from "react"
import { useStore } from "./store/app-store"

export const App = (props) => {
    const store = useStore()

    useEffect(() => {
        store.checkAuth()
    }, []);

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>

    )
}