import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/pageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";
import PageFive from "../pages/PageFive";
import Editprofile from "../pages/Editprofile";
import ForgotPassword from "../pages/ForgotPassWord";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageOne />} />
                <Route path="/tos" element={<PageTwo />} />
                <Route path="/login" element={<PageThree />} />
                <Route path="/verify" element={<PageFour />} />
                <Route path="/signup" element={<PageFive />} />
                <Route path="/editprofile" element={<Editprofile />} />
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
        </BrowserRouter >
    );
}

export default Routing;