let toggle = false;
const showIt = () => {
    toggle = !toggle;
    renderApp();
}; 

function renderApp() {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showIt}>{toggle ? 'Hide details' : 'Show details'}</button>
            <div>
                {/* {toggle ? <p>Some details about me</p> : ''} */}
                {toggle && <p>Some details about me</p>}
            </div>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}
renderApp();