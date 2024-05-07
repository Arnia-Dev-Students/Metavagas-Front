import { Outlet } from "react-router-dom";
import Footer from "../footer";
import NavBar from "../navbar";

export default function Baselayout() {
    return (
        <>
        <NavBar />
            <Outlet />
        <Footer />
        
        </>
    )
} 

//1320