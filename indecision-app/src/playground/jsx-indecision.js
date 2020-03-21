// JSX - JavaScript XML

// JSX expressions 
const user = {
    name: 'Artiom',
    age: 33,
    location: '',
    options: [],
    subtitle: 'Sub title for everyone'
};

// Condition logic
const getLocation = (location) => location ? user.location : 'Unknown';

// If value is undefined, will not be rendered in DOM. So undefined, null and boolean are ignored by JSX
const displayItems = (items) => {
    if (items) {
        return items.map((item, i) => <li key={i}>{item}</li>)
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    // const name = e.target.elements.name.value;

    user.options.push(option);
    e.target.elements.option.value = '';

    renderForm();
}

const removeAll = () => {
    user.options = [];
    renderForm();
}

const makeDecision = () => {
    const randomNumber = Math.floor(Math.random() * user.options.length);
    alert(user.options[randomNumber]);
}

const appRoute = document.getElementById('app');
const renderForm = () => {
    const template = (
        <div>
            <h1>Hello {user.name}</h1>
            {user.subtitle && <p>{user.subtitle}</p>}

            <ul>
                <li>{getLocation(user.location)}</li>
                {(user.age && user.age >= 18) && <li>Age: {user.age}</li>}
            </ul>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                {/* <input type="text" name="name"/> */}
                <button>Add option</button>
            </form>

            <button disabled={user.options.length === 0} onClick={makeDecision}>Make a decision</button>
            <button onClick={removeAll}>Remove options</button>
            <ol>
                {displayItems(user.options)}
            </ol>
        </div>
    );

    ReactDOM.render(template, appRoute)
};
renderForm();