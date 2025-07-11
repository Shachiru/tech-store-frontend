import {MainContent} from "../MainContent/MainContent.tsx";
import {NavBar} from "../NavBar/NavBar.tsx";
import Footer from "../Footer/Footer.tsx";

export function DefaultLayout() {
    return (
        <>
            <NavBar/>
            <MainContent/>
            <Footer/>
        </>
    );
}