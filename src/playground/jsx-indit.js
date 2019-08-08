// JSX - Javascript XML

const test_obj = {
    title: "hi hi ho",
    subtitle: "yaluwane",
    option: []
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  
    const option = e.target.elements.option.value;
  
    if (option) {
      test_obj.option.push(option)
      e.target.elements.option.value = ''
      resnderFunc();
    }
  }
  
  const removeAll = () => {
    test_obj.option = []
    resnderFunc();
  }
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * test_obj.option.length);
    console.log(randomNum)
    const option = test_obj.option[randomNum]
    alert(option)
  }
  
  
  const appRoot = document.getElementById("app");
  
  
  const resnderFunc = () => {
    const template = (
      <div>
        <h1> {test_obj.title} </h1>
        {test_obj.subtitle && <p> {test_obj.subtitle} </p>}
        <p> {test_obj.option.length > 0 ? "Here your option" : "No Options"} </p>
        <button onClick={onMakeDecision} disabled={test_obj.option.length === 0}>What Should I Do</button>
        <button onClick={removeAll}>Remove all</button>
        <ol>
          {
            test_obj.option.map((option) => <li key={option}>{option}</li>)
          }
        </ol>
    
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" /> 
          <button>Add Option</button>
        </form>
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  
  }
  
  resnderFunc();
  