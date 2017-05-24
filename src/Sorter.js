import React, {Component} from 'react';

/**
 * [Sorter description]
 * @type {Object}
 *
 * This comp is responsible for sorting our contacts table
 */

class Sorter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nameSorted : 0,
      mailSorted : 0,
      phoneSorted: 0,
      imageSrc:""
    }
  }

/**
 * [render description]
 * @return {[type]} [description]
 *
 * We just drawing our columns headers depening on current
 * state and call functions to sort our contacts array and
 * return it to ./App.js in sortByName callback func.
 */
    render() {
        return (
            <div className="SorterDiv">
                <button id='nameSorter' className='Sorter'
                  onClick={this.sortByName.bind(this)}>
                  {(this.state.nameSorted === 1)? 'Name ↓' : (this.state.nameSorted===2)? 'Name ↑' : 'Name'}
                  </button>
                <button id='emailSorter'className='Sorter'
                  onClick={this.sortByMail.bind(this)}>
                  {(this.state.mailSorted === 1)? 'E-mail address ↓' : (this.state.mailSorted===2)? 'E-mail address ↑' : 'E-mail address'}
                  </button>
                <button id='phoneSorter'className='Sorter'
                  onClick={this.sortByPhone.bind(this)}>
                  {(this.state.phoneSorted === 1)? 'Phone number ↓' : (this.state.phoneSorted===2)? 'Phone number ↑' : 'Phone number'}
                  </button>
            </div>
        );
    }

    /**
     * [sortByName description]
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     *
     * the same construction for all columns, so we are
     * setting *Sorted field to oe of the following states:
     * 0 - not sorted by this param
     * 1 - sorted ascending
     * 2 - sorted descending
     */

    sortByName(event) {
      event.preventDefault();
      console.log('sorted by name');
      var contacts2 = this.props.contacts.slice() ;
      contacts2.sort((a, b) => {
          var sortVal = 0;
            if (a.fullNameValue.toLowerCase() > b.fullNameValue.toLowerCase()) {
              sortVal = 1;
            }
            if (a.fullNameValue.toLowerCase() < b.fullNameValue.toLowerCase()) {
              sortVal = -1;
            }
            if (this.state.nameSorted === 1) {
              sortVal = -1 * sortVal;
              this.setState({nameSorted:2})
              console.log(this.state.nameSorted)
            }
            else {
              this.setState({nameSorted:1})
              console.log(this.state.nameSorted)
            }
          this.setState({mailSorted:0, phoneSorted:0})
          return sortVal;
          });

      console.log(contacts2);
      return this.props.updateContacts(contacts2);
    }

    sortByMail(event) {
      event.preventDefault();
      console.log('sorted by mail');
      var contacts2 = this.props.contacts.slice() ;
      contacts2.sort((a, b) => {
          var sortVal = 0;
            if (a.emailValue.toLowerCase() > b.emailValue.toLowerCase()) {
              sortVal = 1;
            }
            if (a.emailValue.toLowerCase() < b.emailValue.toLowerCase()) {
              sortVal = -1;
            }
            if (this.state.mailSorted === 1) {
              sortVal = -1 * sortVal;
              this.setState({mailSorted:2})
              console.log(this.state.mailSorted)
            }
            else {
              this.setState({mailSorted:1})
              console.log(this.state.nameSorted)
            }
          this.setState({nameSorted:0, phoneSorted:0})

            return sortVal;
          });
      console.log(contacts2);
      this.props.updateContacts(contacts2);
    }

    sortByPhone(event) {
      event.preventDefault();
      console.log('sorted by phone');
      var contacts2 = this.props.contacts.slice() ;
      contacts2.sort((a, b) => {
          var sortVal = 0;
            if (a.phoneNumberValue > b.phoneNumberValue) {
              sortVal = 1;
            }
            if (a.phoneNumberValue < b.phoneNumberValue) {
              sortVal = -1;
            }
            if (this.state.phoneSorted === 1) {
              sortVal = -1 * sortVal;
              this.setState({phoneSorted:2})
              console.log(this.state.phoneSorted)
            }
            else {
              this.setState({phoneSorted:1})
              console.log(this.state.phoneSorted)
            }
          this.setState({mailSorted:0, nameSorted:0})

            return sortVal;
          });
      console.log(contacts2);
      this.props.updateContacts(contacts2);
    }

}

export default Sorter;
