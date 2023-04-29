import http from "./httpServer";

export default  function getContacts(){
    return http.get("/contacts");
}