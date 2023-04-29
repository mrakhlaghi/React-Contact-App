import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import NotFound from "./components/NotFound";

const routes=[
    {path:"*",element:<ContactList/>},
    {path:"*",element:<AddContact/>},
    {element:<NotFound/>}
];
export default routes;