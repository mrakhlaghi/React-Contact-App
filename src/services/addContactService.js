import http from "./httpServer";

export default  function addContact(data){
    return http.post("/contacts",data);
}