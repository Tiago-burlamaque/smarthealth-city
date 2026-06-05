import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div
            className="
                min-h-screen
                flex
                flex-col
                bg-gradient-to-br
                from-slate-900
                via-blue-900
                to-cyan-800
            "
        >
            <Header />

            <main className="flex-1 pt-28 px-4">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;