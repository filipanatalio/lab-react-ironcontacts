import React,{ useState} from 'react';
import './App.css';
import contactsData from "./contacts.json";


function App() {
  const fiveContacts = contactsData.slice(0, 5);
  const [contacts, setContact] = useState(fiveContacts);

 const addRandom = () => {
   const random = contactsData[Math.floor(Math.random()*contactsData.length)];
   console.log(random);
   setContact([random, ...contacts])
 } 

 const sortbyPopularity = () => {
  setContact([...contacts.sort((a,b) => a.popularity < b.popularity ? 1 : -1)])

}
const sortbyName = () => {
  setContact([...contacts.sort((a,b) => a.name > b.name ? 1 : -1)])
}
const deleteMovie = (contactID) => {
  const filteredContact = contacts.filter((contact) => {
    return contact.id !== contactID
  });
  setContact(filteredContact)

}
  
  return (
  
  
   
     
  <div className='App '>
    <h1>Iron Contacts</h1>
    <button onClick={addRandom}>Add Random Contact</button>
    <button onClick={sortbyPopularity}>Sort by popularity</button>
    <button onClick={sortbyName}>Sort by name</button>
      <table style={{ margin: 'auto' }}>
      <thead>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </thead>
      <tbody>
        {contacts.map(element => {
          return (
            <tr key={element.id}>
              <td>
                <img src={element.pictureUrl} width="150"/>
              </td>
              <td>
                {element.name}
              </td>
              <td>
               {element.popularity.toFixed(2)}
              </td>
              <td>
                {element.wonOscar && <p>🏆</p> }
              </td>
              <td>
                {element.wonEmmy && <p>🏆</p>}
              </td>
              <td>
              <button onClick={() => deleteMovie(element.id)}>Delete</button>
              </td>

            </tr>
          );
        })}
      </tbody>
      </table>
  </div>
      
  );   
}


export default App;







