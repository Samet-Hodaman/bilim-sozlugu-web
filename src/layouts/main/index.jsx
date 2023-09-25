import { Outlet} from "react-router-dom"
import SideBar from "./sidebar"
import Header from "./header"
import Footer from "./footer"
import classNames from "classnames"
import { useSelector } from "react-redux"


export default function MainLayout() {
    const navbar = useSelector(state => state.site.navbar)
    return <div className="flex flex-col bg-gradient-to-r from-sky-100 to-lime-50 ">
    <Header />
    <section className="flex justify-center relative">
        <SideBar />
        <div className={classNames("duration-300 bg-[#dbe6ee] bg-opacity-0 max-w-4xl mr-3 rounded-r-lg sm:rounded-r-lg ",
        {"!max-w-6xl rounded-l-lg ": !navbar})}>
            <section >
                <Outlet />
            </section>
                <Footer />
        </div>
    </section>
    </div>
}