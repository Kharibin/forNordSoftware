import React, {Component} from 'react';
import Header from './Header';
import Forma from './Forma';
import Contact from './Contact';
import Sorter from './Sorter';

/**
 * [contactList description]
 * @type {Array}
 */

var contactList = [
  {
    id : 1,
    fullNameValue : 'Andrey Kharybin',
    emailValue : 'ai.kharybin@gmail.com',
    phoneNumberValue : '0449500713'
  },
  {
    id : 2,
    fullNameValue : 'Petya',
    emailValue : 'petyaq@yah.com',
    phoneNumberValue : '3851422'
  }
  ,
  {
    id : 3,
    fullNameValue : 'Anton',
    emailValue : 'antony@msg.net',
    phoneNumberValue : '1123'
  }
];



/**
 * [state description]
 * @type {Object}
 */

class App extends Component{
    constructor() {
      super();
      this.state = {
        contacts: contactList,
        currentId: 3
      }
    }

/**
 * [addContact description]
 * @param {[type]} contact [description]
 * @param {[type]} id      [description]
 *
 * update current contacts Array with new contact
 * added in ./Forma.js and also increments id counter
 */
    addContact(contact, id){
      this.setState({currentId: ++id});
      let contacts = this.state.contacts;
      console.log(this.state.currentId);
      contacts.push(contact);
      this.setState({contacts : contacts});
    }
/**
 * [updateContacts description]
 * @param  {[type]} contactsU [description]
 * @return {[type]}           [description]
 *
 * Upddate current conacts Array according to sorting
 * in ./Sorter.js
 */
    updateContacts(contactsU){
      console.log(contactsU);
      let contacts2 = contactsU;
      this.setState({contacts : contacts2});
    }

    render() {
        return (
            <div className="checker">
            <Header />
            <Forma contacts={this.state.contacts} currentId={this.state.currentId} addContact={this.addContact.bind(this)}/>
            <Sorter contacts={this.state.contacts} updateContacts={this.updateContacts.bind(this)}/>
            <Contact contacts={this.state.contacts}/>
            </div>
        );
    }

}

export default App;
