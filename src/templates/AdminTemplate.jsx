import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import Header from '../common/components/Header/Header';
const AdminLayout = ({ children, ...rest }) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}
const AdminTemplate = ({ Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if(localStorage.getItem(userLogin))
        {
            let userLogin = JSON.parse(localStorage.getItem('userLogin'))
            if(userLogin.maLoaiNguoiDung ==='QuanTri'){
                return (
                    <AdminLayout>
                        <Component {...props} />
                    </AdminLayout>
                )
            }
            return <Redirect to='/' />
        }
        return <Redirect to='/' />
    }} />
}
export default AdminTemplate;