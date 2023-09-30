import { Outlet} from "react-router-dom"
import SideBar from "./sidebar"
import Header from "./header"
import Footer from "./footer"
import classNames from "classnames"
import { useSelector } from "react-redux"

export default function MainLayout() {
    const navbar = useSelector(state => state.site.navbar)
    
    return <div className="flex w-screen flex-col bg-gradient-to-r from-sky-100 to-lime-50 ">
    <Header />
    <section className="flex justify-center relative">
        <SideBar />
        <div className={classNames("w-full duration-300 bg-[#dbe6ee] bg-opacity-10 max-w-4xl mr-3 rounded-r-lg shadow-lg sm:rounded-r-lg ",
        {"!max-w-6xl rounded-l-lg ": !navbar})}>
            <section >
                <Outlet />
            </section>
        </div>
    </section>
    <Footer />
    </div>
}