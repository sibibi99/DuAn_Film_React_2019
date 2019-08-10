import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import Header from '../common/components/Header/Header';

const HomeLayout = ({ children, ...rest }) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}
const HomeTemplate = ({ Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        
        return (
            <HomeLayout>
                <Component {...props} />
            </HomeLayout>
        )
    }} />
}
export default HomeTemplate;