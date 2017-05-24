import React, {Component} from 'react';

/**
 * [state description]
 * @type {Object}
 *
 * This component response for adding new contact
 * to our contact list, and for validating params of new
 * contact
 */

class Forma extends Component{
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.currentId,
        fullNameValue:'',
        emailValue:'',
        phoneNumberValue:''
      }
    }

/**
 * [render description]
 * @return {[type]} [description]
 *
 *
 */

    render() {
        return (
          <div className="mainPage">
            <p><b>List of Participants</b></p>
            <div id="form1" >
            <form>
            <input id="fullName" className="fullName"
            type="text" placeholder="Full Name"
            onChange={this.nameChange.bind(this)} value={this.state.fullNameValue}>
            </input>
            <input id="emailAddress" className="email"
            type="text" placeholder="E-mail address"
            onChange={this.emailChange.bind(this)} value={this.state.emailValue}>
            </input>
            <input id="phoneNumber" className="phone"
            type="text" placeholder="Phone Number"
            onChange={this.phoneChange.bind(this)} value={this.state.phoneNumberValue}>
            </input>
            <button id="addUserButton" onClick={this.AddNewUser.bind(this)}>Add new</button>
            </form>
            </div>
          </div>
        );
    }

    /**
     * [AddNewUser description]
     * @param {[type]} event [description]
     *
     * Here we are checking all params of new contact
     * (used simple regexp compare) and returning it via
     * callback addContact func.
     */

    AddNewUser(event){
      event.preventDefault();
      let mailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
      let phoneChecker = /(\d)+/;
      if (this.state.fullNameValue.length > 0) {
        if (mailChecker.test(this.state.emailValue)) {
          if (phoneChecker.test(this.state.phoneNumberValue)) {
            this.setState({id: ++this.state.id});
            console.log("new user added", this.state.fullNameValue,
            this.state.emailValue, this.state.phoneNumberValue);
            this.props.addContact(this.state, this.state.id);
            console.log("forma id ", this.state.id);
          }
          else {console.log('invalid phone number adress for new user')};
        }
        else {console.log('invalid e-mail adress for new user')};
      }
      else {console.log('invalid name for new user')};
    }


/**
 * [nameChange description]
 * @param  {[type]} event [description]
 * @return {[type]}       [description]
 *
 * block of simple state updaters
 */
    nameChange(event){
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

}

export default Forma;
