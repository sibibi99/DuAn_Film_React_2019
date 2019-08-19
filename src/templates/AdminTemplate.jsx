import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom';
import HeaderAdmin from '../common/components/HeaderAdmin/HeaderAdmin';
const AdminLayout = ({ children, ...rest }) => {
    return (
        <Fragment>
            <HeaderAdmin/>
            {children}
        </Fragment>
    )
}
const AdminTemplate = ({ Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if(localStorage.getItem('userLogin'))
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
        return <Redirect to='/login' />
    }} />
}
export default AdminTemplate;