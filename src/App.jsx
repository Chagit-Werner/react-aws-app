import { useEffect, useState } from 'react'
import Admin from './components/admin/admin'
import User from './components/user/user';
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Error404 from './components/general-components/error-404';

import Services from './components/admin/services'
import Appointments from './components/admin/appointments'
import GlobalStateAdmin from './AppStore/GlobalStateAdmin'
import GlobalStateAppointment from './AppStore/GlobalStateAppointment';
import GlobalStateService from './AppStore/GlobalStateService';

function App() {


  useEffect(()=>{
    GlobalStateService.initialServices();
    GlobalStateAppointment.initialAppointments();
    GlobalStateAdmin.initBusinessData();   

  },[])
  return (

    <>

      <BrowserRouter>
        <Routes>
        <Route path='*' element={<Error404 />} />

          <Route path={"/"} element={<User />}></Route>
          <Route path={"admin"} element={<Admin />}>
            <Route path={"appointments"} element={<Appointments/>} ></Route>
            <Route path={"services"} element={<Services/>}    ></Route>
          </Route>

        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
