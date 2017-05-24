import React, {Component} from 'react';
import Header from './Header';
import Forma from './Forma';
import Contact from './Contact';
import Sorter from './Sorter';


var contactList = [
  {
    id : 1,
    fullNameValue : 'Vasya',
    emailValue : 'Vasya@gml.com',
    phoneNumberValue : '891812313'
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





class App extends Component{
    constructor() {
      super();
      this.state = {
        contacts: contactList,
        currentId: 3
      }
    }

    addContact(contact, id){
      this.setState({currentId: ++id});
      let contacts = this.state.contacts;
      console.log(this.state.currentId);
      contacts.push(contact);
      this.setState({contacts : contacts});
    }

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
