import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MAIN_MENU } from '../constants/menuConstants'
import { Home } from '../pages'

const MainRoute = () => {
  return (
    <>
    <Routes>
        <Route
        path={MAIN_MENU.HOME}
        element= {<Home/>}
        />
    </Routes>
    </>
  )
}

export default MainRoute