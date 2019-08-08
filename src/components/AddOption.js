import React from "react";

export default class AddOption extends React.Component {
  
    state = {
        error: undefined
    }
  
    handleAddOption = (e) => {
      e.preventDefault();
      // console.log(e.target.elements[0].value)
      // console.log(this.props)
      // debugger
      const option = e.target.elements[0].value.trim();
      // debugger
      const error = this.props.handleAddOption(option);
      e.target.elements[0].value = "";
  
      this.setState(() => ({
         error 
      }));
  
      if (!error) {
        e.target.elements[0].value = ""
      }
  
    }
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input  className="add-option__input" type="text" name="option"/>
            <button className="button">Add Option</button>
          </form>
        </div>
      )
    }
}