import http from "./httpServer";

export default  function updateContact(data){
    console.log(data);
    return http.put("/contacts",data);
}