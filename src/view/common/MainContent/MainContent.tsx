import {Route, Routes} from 'react-router-dom';
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Services} from "../../pages/Services/Services.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
import {itemsList} from "../ModifyCart/ModifyCart.tsx";

export function MainContent() {
    return (
        <main className="flex justify-center items-center min-h-screen px-6 py-12 bg-gradient-to-br from-blue-100/80 to-green-100/80 backdrop-blur-lg">
            <div className="w-full max-w-7xl bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/shopping-cart" element={<ShoppingCart itemsList={itemsList}/>}></Route>
                </Routes>
            </div>
        </main>
    );
}