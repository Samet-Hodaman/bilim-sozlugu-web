import { Outlet} from "react-router-dom"
import SideBar from "./sidebar"
import Header from "./header"
import Footer from "./footer"
import classNames from "classnames"
import { useSelector } from "react-redux/es/hooks/useSelector"


export default function MainLayout() {
    const {navbar} = useSelector(state=>state.site)
    return <div className="flex flex-col bg-gradient-to-r from-sky-50 to-lime-50">
    <Header />
    <section className="flex justify-center relative">
        <SideBar />
        <div className={classNames("duration-300 bg-sky-700 bg-opacity-30 max-w-4xl mr-3 rounded-lg sm:rounded-r-lg ",
        {"!max-w-6xl ": !navbar})}>
            <section >
                <Outlet />
            </section>
                <Footer />
        </div>
    </section>
    </div>
}