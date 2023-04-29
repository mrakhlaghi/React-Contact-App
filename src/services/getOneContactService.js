import http from "./httpServer";

export default  function getOneContact(id){
    return http.get(`/contacts/${id}`);
}