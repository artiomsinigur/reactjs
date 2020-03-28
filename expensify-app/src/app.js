import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'
// Inject CSS into the DOM
import './styles/style.scss'

const ExpenseDashboardPage = () => {
    return (
        <div>This is from dashboard page</div>
    )
}

const AddExpensePage = () => (
    <div>This is from create expense page</div>
)

function EditExpensePage () {
    return (
        <div>This is edit expense page</div>
    )
}

const HelpPage = () => (
    <div>This is help expense page</div>
)

const NotFoundPage = () => (
    <div>404 page | <Link to="/">Home</Link></div>
)

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact>Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create</NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">Edit</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                {/* <Route exact path="/" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} /> */}
                
                <Route path="/help">
                    <HelpPage />
                </Route>
                <Route path="/edit">
                    <EditExpensePage />
                </Route>
                <Route path="/create">
                    <AddExpensePage />
                </Route>
                <Route exact path="/">
                    <ExpenseDashboardPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));