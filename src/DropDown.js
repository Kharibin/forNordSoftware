import React, {Component} from 'react';


class DropDown extends Component{
    constructor(props)  {
        super(props);
        this.state = {isOpened : false};
    }  
    
    render() {
        let dropDownText;
        if (this.state.isOpened) {
            dropDownText = <div> ololo </div>;
        }
        return (
            <div className="DropDown" onClick={this.toggleState.bind(this)}>
            DropDown
            {dropDownText}
            </div>
        );
    }
    
    toggleState(){
        this.setState ({isOpened : !this.state.isOpened}); 
        console.log('isOpened', this.state.isOpened);
    }
}

export default DropDown;