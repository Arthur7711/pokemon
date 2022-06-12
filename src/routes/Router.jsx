import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../pages/detailsPage";
import { Home } from "../pages/home";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/:id`} element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
