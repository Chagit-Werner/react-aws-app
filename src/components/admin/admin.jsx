import {observer} from 'mobx-react'

import GlobalStateLogin from "../../AppStore/GlobalStateLogin";
import AdminBusiness from "./adminBusiness";
import Login from "./Login";

//פונקציה שמוגדרת להסתכל על המשתנים של המוביקס
 const Admin = observer(()=>{
     return (
         <>
         { 
             GlobalStateLogin.isLogin== false ? <Login/>: <AdminBusiness/>
         }
         </>
     )
 })
 export default Admin;