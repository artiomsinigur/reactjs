import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/components/Home'
import Header from '../src/components/Header'
import Item from '../src/components/Item'
import Portfolio from '../src/components/Portfolio'
import Contact from '../src/components/Contact'
import NotFoundPage from '../src/components/NotFoundPage'

export default function AppRouter () {
    return ( 
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route path="/portfolio/:id" component={Item} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}