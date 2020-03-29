import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Item from './Item'

const Portfolio = ({ match }) => {
    return (
        <div>
            <div>
                <Link to={`${match.url}/1`}>Item one | </Link>
                <Link to={`${match.url}/2`}>Item two</Link>
            </div>
            {/* <Switch>
                <Route path={`${match.path}/:id`} component={Item} />
                <Route path={`${match.path}`} render={() => <p>Please select an item</p>} />
            </Switch> */}
        </div>
    )
}

export default Portfolio