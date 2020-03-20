// JSX - JavaScript XML

// JSX expressions 
const userName = 'Artiom';
const userAge = 33;
const userLocation = 'Montréal';
const user = {
    name: 'Artiom',
    age: 33,
    location: '',
    options: [],
    languages: ['Anglais', 'Francais', 'Roumain', 'Russe'],
    subtitle: 'Sub title for everyone'
};

// Condition logic
const getLocation = (location) => location ? user.location : 'Unknown';

// If value is undefined, will not be rendered in DOM. So undefined, null and boolean are ignored by JSX
const displayItems = (items) => {
    if (items) {
        return items.map((item, i) => <p>Item <strong>{item}</strong></p>)
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

const appRoute = document.getElementById('app');
const renderForm = () => {
    const template = (
        <div>
            <h1>Hello {user.name}</h1>
            {user.subtitle && <p>{user.subtitle}</p>}

            <ul>
                <li>{user.age}</li>
                <li>{getLocation(user.location)}</li>
                {(user.age && user.age >= 18) && <li>Age: {user.age}</li>}
            </ul>
            {displayItems(user.languages)}
            {user.options.length}

            <button onClick={removeAll}>Remove options</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <input type="text" name="name"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoute)
};
renderForm();