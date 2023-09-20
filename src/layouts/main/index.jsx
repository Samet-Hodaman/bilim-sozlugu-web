import { Outlet} from "react-router-dom"
import SideBar from "./sidebar"
import Header from "./header"
import Footer from "./footer"
import { useEffect } from "react"

export default function MainLayout() {
    return <div className="flex flex-col bg-gradient-to-r from-sky-300 to-pink-300">
    <Header />
    <section className="flex justify-center">
        <SideBar />
        <div className="flex-3 bg-sky-700 bg-opacity-30 max-w-4xl mr-3 rounded-r-lg">
            <section>
                <Outlet />
            </section>
                <Footer />
        </div>
    </section>
    </div>
}