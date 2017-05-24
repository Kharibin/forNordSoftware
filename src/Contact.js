import React, {Component} from 'react';



class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      toEdit:null,
      fullNameValue:'',
      emailValue:'',
      phoneNumberValue:'',
      deletedIds:[]
    }
  }

  setEditable(contact){
    this.setState({
      fullNameValue:contact.fullNameValue,
      emailValue:contact.emailValue,
      phoneNumberValue:contact.phoneNumberValue,
      toEdit: contact.id
    });
    console.log('id to edit', contact.id)
  }

  fakeDel(id, deletedIds){
    console.log(deletedIds);
    let fakeDeleted = deletedIds;
    fakeDeleted.push(id);
    this.setState({deletedIds: fakeDeleted});
  }

  getIdToEdit(){
    console.log('id to edit', this.state.toEdit)
  }

  nameChange(event, contact){
    this.setState({fullNameValue: event.target.value})
    console.log("value changed", this);
  }

  emailChange(event){
    this.setState({emailValue: event.target.value})
    console.log("value changed", this);
  }

  phoneChange(event){
    this.setState({phoneNumberValue: event.target.value})
    console.log("value changed", this);
  }

  editUser(contact, save) {
        console.log('zashel kontakt',contact);
        let contactNative = contact;
        if (save){
        let mailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        let phoneChecker = /(\d)+/;
        if (this.state.fullNameValue.length > 0) {
          if (mailChecker.test(this.state.emailValue)) {
            if (phoneChecker.test(this.state.phoneNumberValue)) {
              console.log("user edited", this.state.fullNameValue,
              this.state.emailValue, this.state.phoneNumberValue);
              {contact.fullNameValue = this.state.fullNameValue};
              {contact.emailValue = this.state.emailValue};
              {contact.phoneNumberValue = this.state.phoneNumberValue};
              console.log("forma id ", contact);
              this.setState({
                toEdit:null,
                fullNameValue:'',
                emailValue:'',
                phoneNumberValue:''
              });

            }
            else {console.log('invalid phone number adress for new user')};
          }
          else {console.log('invalid e-mail adress for new user')};
        }
        else {console.log('invalid name for new user')};
      }
      else {
        contact = contactNative;
        this.setState({
          toEdit:null,
          fullNameValue:'',
          emailValue:'',
          phoneNumberValue:''
        });
      }
  }

    editOrNot(contact , index){
      if (this.state.deletedIds.indexOf(contact.id) != -1) return null;
      if (contact.id === this.state.toEdit){
        return (
          <div className="contact">
            <div id="form1" >
            <form>
            <input id="fullName" className="fullName"
              type="text" placeholder="Full Name"
              onChange={(e) => this.nameChange(e ,contact)}
              defaultValue={contact.fullNameValue}>
            </input>
            <input id="emailAddress" className="email"
              type="text" placeholder="E-mail address"
              onChange={this.emailChange.bind(this)}
              defaultValue={contact.emailValue}>
            </input>
            <input id="phoneNumber" className="phone"
              type="text" placeholder="Phone Number"
              onChange={this.phoneChange.bind(this)}
              defaultValue={contact.phoneNumberValue}>
            </input>
            <div id="cancelButton" onClick={this.editUser.bind(this, contact, 0)}>Cancel</div>
            <div id="saveButton" onClick={this.editUser.bind(this, contact, 1)}>Save</div>
            </form>
            </div>
          </div>
        );
      }
      else return (

              <table className="contact" key={'contact' + contact.id + index}>
              <tbody>
                <tr>
                  <td className="nameCol">{contact.fullNameValue}</td>
                  <td className="freeCol"></td>
                  <td className="mailCol">{contact.emailValue}</td>
                  <td className="freeCol"></td>
                  <td className="phoneCol">{contact.phoneNumberValue}</td>
                  <td className="freeCol"></td>
                  <td className="editCol">
                    <img className="editDelete" src={require('./pic/edit.png')}
                      alt="" height="24px" width="24px"
                      onClick={this.setEditable.bind(this, contact)}
                    /></td>
                  <td className="deleteCol">
                      <img className="editDelete" src={require('./pic/delete.png')}
                      alt="" height="24px" width="24px"
                      onClick={this.fakeDel.bind(this, contact.id, this.state.deletedIds)}
                  /></td>
                </tr>
              </tbody>
              </table>
      );
    }

    render() {
        console.log(this.props.contacts)

        return (
            <div >
              {this.props.contacts.map((contact, index) =>
                this.editOrNot(contact, index)
              )}
            </div>
        );
    }
}

export default Contact;
