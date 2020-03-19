// JSX - JavaScript XML

// JSX expressions 
const userName = 'Artiom';
const userAge = 33;
const userLocation = 'Montréal';
const user = {
    name: 'Artiom',
    age: 33,
    location: '',
    languages: ['Anglais', 'Francais', 'Roumain', 'Russe'],
    subtitle: 'Sub title for everyone'
};

// Condition logic
const getLocation = (location) => location ? user.location : 'Unknown';

// If value is undefined, will not be rendered in DOM. So undefined, null and boolean are ignored by JSX
const getLanguages = (languages) => {
    if (languages) {
        return languages.map((item) => <p>Learned <strong>{item}</strong></p>)
    }
};

const template = (
    <div>
        <h1>Hello {user.name}</h1>
        {user.subtitle && <p>{user.subtitle}</p>}

        <ul>
            <li>{user.age}</li>
            <li>{getLocation(user.location)}</li>
            {(user.age && user.age >= 18) && <li>Age: {user.age}</li>}
        </ul>

        {getLanguages(user.languages)}
    </div>
);

// Create a templateTwo variable JSX expression

  const appRoute = document.getElementById('app');
  ReactDOM.render(template, appRoute);