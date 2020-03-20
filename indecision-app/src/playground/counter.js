// TemplateTwo - Events and Attributes
let count = 0;
const addOne = () => {
    count++;
    renderCounter();
}
const minusOne = () => {
    count--;
    renderCounter();
}
const reset = () => {
    count = 0;
    renderCounter();
}

const appRoute = document.getElementById('app');
const renderCounter = () => {
    const templateTwo = (
        <div>
            <h2>Count {count}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoute);
  }

  renderCounter();