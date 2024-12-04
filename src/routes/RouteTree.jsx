import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "./Main";

const RouteTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RouteTree;
