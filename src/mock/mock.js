import axios from "axios";
import MockAdapter from "axios-mock-adapter";
// import Transactions from "../database/mock-api.json";
import contacts from "../Database/dataBase";
var mock = new MockAdapter(axios, { onNoMatch: "throwException" });

let database = contacts;

mock.onGet("/contacts").reply((config) => {
  return [200, { database }];
});

mock.onPost("/contacts").reply((config) => {
  // config -->  contains any props that we passed to the  axios.post
  console.log(config);
  const newContact = JSON.parse(config.data);
  // console.log(newContact, "Hey Im post");
  const updated = [...database, { ...newContact }];
  database = updated;
  return [200, updated];
});

mock.onDelete("/contacts").reply((config) => {
  console.log(config);
  console.log(config.id);
  const id = config.id;
  const filteredContact = database.filter((c) => c.id !== id);
  database = filteredContact;
  return [200, filteredContact];
});
mock.onPut("/contacts").reply((config) => {
  console.log(JSON.parse(config.data));
  const data = JSON.parse(config.data);
  const id = data.id;
  console.log(id);
  console.log(data);
  const filteredConIndex = database.findIndex((c) => c.id === id);
  database[filteredConIndex].name= data.name
  database[filteredConIndex].email=data.email
  
  return[(200)];
});

export default mock;
