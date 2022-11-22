import { useState } from "react";
import "./App.css";

import data from "./contacts.json";
const allContacts = data.slice(5, 10);
console.log(allContacts);

//import "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts);

  const handleRandomContact = () => {
    const copy = [...contacts];
    const randomContact = Math.floor(Math.random() * data.length);
    copy.push(data[randomContact]);
    setContacts(copy);
  };

  const sortByName = () => {
    const copy = [...contacts];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(copy);
  };

  const sortByPopularity = () => {
    const copy = [...contacts];
    copy.sort((a, b) => a.popularity - b.popularity);
    setContacts(copy);
  };

  const handleDelete = (id) =>
    setContacts(contacts.filter((contact) => contact.id !== id));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleRandomContact}>Random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        {contacts.map((element) => {
          return (
            <tbody key={element.id}>
              <tr>
                <td>
                  <img src={element.pictureUrl}></img>
                </td>
                <td>{element.name}</td>
                <td>{element.popularity}</td>
                <td>{element.wonOscar ? "🏆" : ""}</td>
                <td>{element.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button onClick={() => handleDelete(element.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
