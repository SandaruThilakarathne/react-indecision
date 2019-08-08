import React from 'react';
import AddOption from "./AddOption"
import Action from "./Action"
import Header from "./Header"
import Options from "./Options"
import OptionModal from "./OptionModal";

export default class IndciosonApp extends React.Component {
    state = {
      options : [],
      selectedOption: undefined
    }
    // constructor(props) {
    //   super(props);
    //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //   this.handlePick = this.handlePick.bind(this);
    //   this.handleAddOption = this.handleAddOption.bind(this);
    //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // }
  
    componentDidMount() {
  
      try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
  
        if (options) {
          this.setState(() => ({ options: options }));
        }
  
      } catch (e) {
        // Do nothing at all
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)
          localStorage.setItem('options', json)
      }
    }
    componentWillUnmount() {
      console.log('Will unmount')
    }
  
    handleDeleteOptions = () => {
      this.setState(() => ({options: []}))
    }
  
    handlePick = () => {
      const picked = Math.floor(Math.random() * this.state.options.length);
      // alert(this.state.options[picked])
      // alert('alert')
      const option = this.state.options[picked]
      this.setState(() => ({
        selectedOption: option
      }))
    }
  
    handleAddOption = (option) => {
      // console.log(option)
  
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exist"
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat([option])
      })) 
      
    }
  
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }))
    }

    handleModelClose = () => {
      this.setState(() => ({
        selectedOption : undefined
      }))
    }
  
    render() {
  
      
      // options.push(this.props.title.data)
      return (
        <div>
          <Header />
          <div className="container">
            <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick}/>
            <div className="widget">
              <Options 
                optionsarr={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption test={'ad'} handleAddOption={this.handleAddOption}/>
            </div>
          </div>
          
          <OptionModal selectedOption={this.state.selectedOption} closeModal={this.handleModelClose}/>
        </div>
      )
    }
}