import http from "./httpServer";

export default  function updateContact(id,data){
    return http.put(`/contacts/${id}`,data);
}