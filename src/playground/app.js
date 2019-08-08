class IndciosonApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : []
    }
  }

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

  handleDeleteOptions() {
    this.setState(() => ({options: []}))
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

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    })) 
    
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  render() {

    
    // options.push(this.props.title.data)
    return (
      <div>
        <Header />
        <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick}/>
        <Options 
          optionsarr={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption test={'ad'} handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      {props.subtitle && <h2>{ props.subtitle }</h2>}
    </div>
  )
}


Header.defaultProps = {
  title: "Indicision",
  subtitle: "Here we are"
}

const Action = (props) => {
  return <button onClick={props.handlePick} disabled={ !props.hasOptions }>What Should I do</button>
}


const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      { props.optionsarr.length === 0 && <p>Please add an option to get started</p> }
      {
         props.optionsarr.map((opt) => (
          <Option 
          key={opt}  
          binddata={opt}
          handleDeleteOption={props.handleDeleteOption}
          />
         ))
      }
    
    </div>
  )
}
 


const Option = (props) => {
  console.log(props)
  return (
    <div>
     {props.binddata}
     <button 
      onClick={(e) => {
        props.handleDeleteOption(props.binddata);
      }}
      >
       Remove
       </button>
    </div>
  )
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input  type="text" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndciosonApp  options={[]}/>, document.getElementById('app'))