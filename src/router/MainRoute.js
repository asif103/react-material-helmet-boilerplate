import React from "react";
import { Route, Routes } from "react-router-dom";
import { MAIN_MENU } from "../constants/menuConstants";
import { Home, About, Contact } from "../pages";
import SharedLayout from "../layout/SharedLayout";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={MAIN_MENU.ABOUT} element={<About />} />
          <Route path={MAIN_MENU.CONTACT} element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
