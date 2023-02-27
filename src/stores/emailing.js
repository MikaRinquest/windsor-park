import { defineStore } from "pinia";

// useEmailStore is turning defineStore into a constant so that we can use it throughout the app
// defineStore is the function for the store itself
// emailing acts an identifier for the store, since pinia allows us to use multiple modules for the store
export const useEmailStore = defineStore("emailStore", {
  state: () => {
    {
    }
    },
    
    actions: {
        sendEmail(emailBody) {
            fetch("https://windsor-park.onrender.com/email", {
              method: "POST",
              body: JSON.stringify(emailBody),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            .then((res)=>res.json())
            .then((data) => console.log(data))
        }
    }
});
