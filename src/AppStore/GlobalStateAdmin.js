import { action, makeObservable, observable, runInAction } from 'mobx'
import axios from 'axios'
class GlobalStateAdmin {
  //----------------------------------LOGIN-PAGE:
  //מעדכנת  אותו action/והפונקציה שהיא observable/יצרנו מחלקה שמכילה משתנה 

  business = {
    id: "",
    name: "",
    address: "",
    phone: "",
    owner: "",
    logo: "",
    description: "",
  };


  
  isAdmin = false;
  isStateSetting = false;
  isNewService = false;
  enableButton = false;

  constructor() {
    //observable יצירת
    makeObservable(this, {
      business: observable,

      isNewService: observable,
      isStateSetting: observable,
      enableButton: observable,
      isAdmin: observable,
    
      setIsStateSetting: action,

      setEnableButtons: action,
      updateDetailsAdmin: action,
      setIsAdmin: action,

      // initBusinessData:action
    })
  }

  initBusinessData = async () => {

    const responseData = await fetch("http://localhost:8787/businessData")
    const data = await responseData.json()
    const { name, address, phone, owner, logo, description } = data;

    this.business = { name, address, phone, owner, logo, description };
  }
 

  updateDetailsAdmin(data) {
    console.log("data? is?", data);
    console.log("In update Details:", this.business);
    fetch("http://localhost:8787/businessData",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),



      }).then((response) => {
        console.log("then:", response);
        if (response.status == 200) {
          this.business.name = data.name
          this.business.address = data.address
          this.business.phone = data.phone
          this.business.owner = data.owner

          this.business.logo = data.logo
          this.business.description = data.description
        }
        console.log("BUISNESS IS", this.business);

      }).catch((response) => {
        console.log("ERROR", response.status);
      })

  }
  

  setIsStateSetting = (val) => {
    this.isStateSetting = val;
  }

  setIsAdmin = (val) => {
    this.isAdmin = val;

  }
  setEnableButtons = (val) => {
    this.enableButtons = val;
  }
  setIsNewService = (val) => {
    this.isNewService = val;
  }



}
//יצירת מופע יחיד שאליו תמיד נפנה
export default new GlobalStateAdmin();
