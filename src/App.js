import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
// import routes from"..\routes.js"
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <main className="App">
      <div className="container">

      <h1 className="header" > Contact App</h1>

      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>

      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} onDelete={deleteContactHandler}/> */}

      {/* <Routes>
    {routes.map((routes)=>{
      <Route {...routes}/>
    })}
    </Routes> */}

      </div>
    </main>
  );
}

export default App;
