import "./App.css";
import {useState} from 'react'
import contactsAll from "./contacts.json";

function App() {
  
  const  firstContacts= contactsAll.slice(0,6);

  const [contacts, setContacts] = useState(firstContacts);

  const trophy = "🏆";



  const addRandomContact = () =>  {    
  const remainingContacts = contactsAll.slice(6, contactsAll.length -1);
  const randomContact = remainingContacts[Math.round(Math.random()*remainingContacts.length)];
  const copyContacts = [...contacts];
  copyContacts.push(randomContact);
  setContacts(copyContacts); 
  }

  const sortByPopularity = () =>  {       
    const copyContacts = [...contacts];
    const sortedContacts = copyContacts.sort((a,b) => {
      if (a.popularity < b.popularity)
      return -1;
    if (a.popularity> b.popularity)
      return 1;
    return 0;
    });
    setContacts(sortedContacts); 
    }

  const sortByName = () =>  {       
    const copyContacts = [...contacts];
    const sortedContacts = copyContacts.sort((a,b) => {
      if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
    });
    setContacts(sortedContacts); 
    }

    
    const deleteContact = (contactId) => {
      const filteredContact = contacts.filter(contact => contact.id !== contactId);
      setContacts(filteredContact);
    }
    
  return (
    <>
      <button onClick={() => addRandomContact()}>Add Random Contact</button> 
      <button onClick={() => sortByPopularity()}>Sort by popularity</button> 
      <button onClick={() => sortByName()}>Sort by name</button> 
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {contacts.map(contact => {
          return (
            <tr key={contact.name}>
              <td>
                <img
                  className="picture"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{Number(contact.popularity.toFixed(2))}</td>
              <td>{contact.wonOscar &&  trophy }</td>
              <td>{contact.wonEmmy  &&  trophy }</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;
