import {Footer} from "../Footer/Footer.tsx";
import {MainContent} from "../MainContent/MainContent.tsx";
import {NavBar} from "../NavBar/NavBar.tsx";

export function DefaultLayout() {
    return (
        <>
            <NavBar/>
            <MainContent/>
            <Footer/>
        </>
    );
}