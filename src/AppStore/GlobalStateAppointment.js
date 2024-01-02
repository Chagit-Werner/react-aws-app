import { action, makeObservable, observable, runInAction } from 'mobx'
import Swal from 'sweetalert2'

import axios from 'axios'
class GlobalStateAppointment {
    listAppointments = [];

    constructor() {
        makeObservable(this, {
    listAppointments:observable,
    initialAppointments: action,

})}

initialAppointments = async () => {
    axios.get("http://localhost:8787/appointments").then((result) => {
      runInAction(() => {
        this.listAppointments = result.data;
        this.listAppointments.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
      });
    });

  }

  async addAppointment(data) {
    console.log("mobx POST  ", data);
    await fetch("http://localhost:8787/appointment",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then((response) => {
  
        console.log("then:", response);
        if (response.status == 200) {
          this.listAppointments.push(data)
          this.listAppointments.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
          Swal.fire({
            title: "The appointment was successfully set",
            text: "You have an appointment!",
            icon: "success",
            showConfirmButton:false, timer:3000
          });
        }
        else if (response.status == 400)
        Swal.fire({
          title: "The time you wanted to schedule is taken. Try to schedule another time!!",
          text: "You have an appointment!",
          icon: "error",
          showConfirmButton:false, timer:5000
        });
        
      }).catch((response) => {

        console.log("ERROR", response.status);
        if (response.status == 400)
           Swal.fire({
             title: "The time you wanted to schedule is taken. Try to schedule another time!!",
              text: "You have an appointment!",
             icon: "error",
             showConfirmButton:false, timer:5000
        });
      })
  }
}
export default new GlobalStateAppointment();
