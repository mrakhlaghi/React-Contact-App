import http from "./httpServer";

export default  function deleteContact(id){
    return http.delete("/contacts" ,{id});
}