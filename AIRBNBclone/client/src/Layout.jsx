import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout(){  {/**To use in many files and no repeat as a template*/}
    return(
        <div className="p-4 flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
        </div>
    );
}