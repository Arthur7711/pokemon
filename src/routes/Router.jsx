import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../pages/detailsPage";
import { Home } from "../pages/home";
import { Searching } from "../pages/searchingPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searching" element={<Searching />} />
      <Route path={`pokemon/:id`} element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
