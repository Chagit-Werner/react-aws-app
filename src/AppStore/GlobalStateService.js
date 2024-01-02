import { action, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'

class GlobalStateService {
    service = {
        id: "",
        name: "",
        description: "",
        price: "",
        duration: "",
    };
    listServices = [];
    constructor() {
        makeObservable(this, {

    listServices: observable,

})}

initialServices = async () => {
    axios.get("http://localhost:8787/services").then((result) => {
      runInAction(() => {
        this.listServices = result.data;

      });
    });

  }
  addService = async (data) => {
    fetch("http://localhost:8787/service",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then((response) => {
        console.log("then:", response);
        if (response.status == 200)
          this.listServices.push(data)
      }).catch((response) => {
        console.log("ERROR", response.status);
      })

  }
  
  
}
export default new GlobalStateService();
