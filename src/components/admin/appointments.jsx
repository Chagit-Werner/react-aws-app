import { observer } from "mobx-react"
import GlobalStateAdmin from "../../AppStore/GlobalStateAdmin"
import AppointmentToShow from "./appointmentToShow"
import GlobalStateAppointment from "../../AppStore/GlobalStateAppointment"
import './designCards.css'


const Appointments = observer(() => {
    function precedsDate(date) {
        const myDate = new Date(date);
        return new Date(
            myDate.getFullYear(),
            myDate.getMonth(),
            myDate.getDate() - 7,
        );
    }
    GlobalStateAdmin.setIsNewService(false)
    return (
        
        <div>
           <div className="cards">
            {
                GlobalStateAppointment.listAppointments?.map(appointment => <AppointmentToShow props={appointment}
                    color={new Date(appointment.dateTime) - 24 <= new Date() ? "red" : 
                          precedsDate(appointment.dateTime) <= new Date() ? "orange" : "green"}   
                    key={appointment.id} />)
            } 
            </div>
            </div>
    )
})

export default Appointments