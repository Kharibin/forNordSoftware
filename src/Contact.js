import React, {Component} from 'react';

/**
 * [Contact comp description]
 * @type {Object}
 *
 * largest component wich provides components
 * table rendering, also contains functions
 * for turning on edit state of contact
 * and implemnts "fake" contact deleting
 */


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

/**
 * [setEditable description]
 * @param {[type]} contact [description]
 * we are setting contact with current id
 * to "edit" mode, also setting default
 * editing forms values
 */
  setEditable(contact){
    this.setState({
      fullNameValue:contact.fullNameValue,
      emailValue:contact.emailValue,
      phoneNumberValue:contact.phoneNumberValue,
      toEdit: contact.id
    });
    console.log('id to edit', contact.id)
  }

  /**
   * [fakeDel description]
   * @param  {[type]} id         [description]
   * @param  {[type]} deletedIds [description]
   * @return {[type]}            [description]
   *
   * Here we are adding id of item we want to delete
   * to deletedIds array, wich will be checked in render func
   */


  fakeDel(id, deletedIds){
    console.log(deletedIds);
    let fakeDeleted = deletedIds;
    fakeDeleted.push(id);
    this.setState({deletedIds: fakeDeleted});
  }


/**
 * [nameChange description]
 * @param  {[type]} event   [description]
 * @param  {[type]} contact [description]
 * @return {[type]}         [description]
 *
 * Simple functions to update current  state
 * of editing forms
 *
 */
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
  }

  /**
   * [editUser description]
   * @param  {[type]} contact [description]
   * @param  {[type]} save    [description]
   * @return {[type]}         [description]
   *
   * function for validating edited contacts
   * params and choosing update them or not
   * using save argument (bool)
   */

  editUser(contact, save) {
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

/**
 * [editOrNot description]
 * @param  {[type]} contact [description]
 * @param  {[type]} index   [description]
 * @return {[type]}         [description]
 *
 * checks if our contact deleted or not,
 * if deleted we just passing null value
 * to render func.
 * checks if this contact is contact to edit
 *
 * responsible for rendered view of contact
 */

    editOrNot(contact , index){
      if (this.state.deletedIds.indexOf(contact.id) != -1) return null;
      if (contact.id === this.state.toEdit){

        /**
         * [description]
         * @param  {[type]} div [description]
         * @return {[type]}     [description]
         *
         * the way "edit mode" looks like
         */
        return (
          <div className="contact">
            <div >
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
            <div id="saveButton" onClick={this.editUser.bind(this, contact, 1)}>Save </div>
            </form>
            </div>
          </div>
        );
      }

      /**
       *The way standart contact represnted in browser
       */
      else return (
              <div className="contact" key={'contact' + contact.id + index}>
                  <div className="nameCol">{contact.fullNameValue}</div>
                  <div className="mailCol">{contact.emailValue}</div>
                  <div className="phoneCol">{contact.phoneNumberValue}</div>
                  <div className="editCol">
                    <img className="editDelete" src={require('./pic/edit.png')}
                      onClick={this.setEditable.bind(this, contact)}/>
                    </div>
                  <div className="deleteCol">
                      <img className="editDelete" src={require('./pic/delete.png')}
                      onClick={this.fakeDel.bind(this, contact.id, this.state.deletedIds)}/>
                  </div>
              </div>
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
