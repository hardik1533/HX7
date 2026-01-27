import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Legacy from "./pages/Legacy";
import Empire from "./pages/Empire";
import Navbar from "./navigation/Navbar";
import FullScreenNav from "./navigation/FullScreenNav";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";


const App = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <FullScreenNav/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brands" element={<Brands/>} />
                <Route path="/legacy" element={<Legacy/>} />
                <Route path="/empire" element={<Empire/>} />

                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
};

export default App;
