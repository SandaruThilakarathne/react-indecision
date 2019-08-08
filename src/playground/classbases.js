class IndciosonApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options : []
      }
    }
  
    handleDeleteOptions() {
      this.setState(() => {
        return {
          options : []
        };
      });
    }
  
    handlePick() {
      const picked = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[picked])
      // alert('alert')
    }
  
    handleAddOption(option) {
      // console.log(option)
  
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exist"
      }
      this.setState((prevState) => {
        return {
          options: prevState.options.concat([option])
        }
      })
    }
  
    render() {
  
      const title = "Indecision App"
      const subtitle = "Testing test"
      // options.push(this.props.title.data)
      return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick}/>
          <Options 
            optionsarr={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption test={'ad'} handleAddOption={this.handleAddOption}/>
        </div>
      )
    }
  }
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{ this.props.title }</h1>
          <h2>{ this.props.subtitle }</h2>
        </div>
      )
    }
  }
  
  class Action extends React.Component {
  
    render() {
      return <button onClick={this.props.handlePick} disabled={ !this.props.hasOptions }>What Should I do</button>
    }
  }
  
  class Options extends React.Component {
  
    render() {
      return (
        <div>
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {
             this.props.optionsarr.map((opt) => <Option key={opt}  binddata={opt}/>)
          }
        
        </div>
      )
    }
  }
  
  class Option extends React.Component {
    render() {
      console.log(this.props.binddata)
      return (
        <div>
         {this.props.binddata}
        </div>
      )
    }
  }
  
  class AddOption extends React.Component {
  
    constructor(props) {
      // console.log(props)
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      }
    }
  
    handleAddOption(e) {
      e.preventDefault();
      // console.log(e.target.elements[0].value)
      // console.log(this.props)
      // debugger
      const option = e.target.elements[0].value.trim();
      // debugger
      const error = this.props.handleAddOption(option);
      e.target.elements[0].value = "";
  
      this.setState(() => {
        return { error }
      })
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input  type="text" />
            <button>Add Option</button>
          </form>
        </div>
      )
    }
  }
  
  
  ReactDOM.render(<IndciosonApp />, document.getElementById('app'))