import React from "react";

import Header from "./sections/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";

import {
    createBrowserRouter,
    Route,
    Routes,
    RouterProvider,
} from "react-router-dom";

function MainApp() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </>
    );
}

const router = createBrowserRouter([{ path: "*", element: <MainApp /> }]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
