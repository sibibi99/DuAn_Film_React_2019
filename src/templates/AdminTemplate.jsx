import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom';
import HeaderAdmin from '../common/components/HeaderAdmin/HeaderAdmin';
import SideBarAdmin from '../common/components/SideBarAdmin/SideBarAdmin';
// IMPORT TEAMPLATE ADMIN
import '../Assets/css/font-face.css';
import '../Assets/vendor/font-awesome-4.7/css/font-awesome.min.css'
import '../Assets/vendor/font-awesome-5/css/fontawesome-all.min.css'
import '../Assets/vendor/mdi-font/css/material-design-iconic-font.min.css'
import '../Assets/vendor/bootstrap-4.1/bootstrap.min.css'
import '../Assets/vendor/animsition/animsition.min.css'
import '../Assets/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css'
import '../Assets/vendor/wow/animate.css'
import '../Assets/vendor/css-hamburgers/hamburgers.min.css'
import '../Assets/vendor/slick/slick.css'
import '../Assets/vendor/select2/select2.min.css'
import '../Assets/vendor/perfect-scrollbar/perfect-scrollbar.css'
import '../Assets/css/theme.css';
import Modal from '../common/components/Modal/Modal';


const AdminLayout = ({ children, ...rest }) => {


    return (
        <Fragment>
            <HeaderAdmin />
            <SideBarAdmin />
            {children}
            <Modal/>
    

        </Fragment>
    )
}
const AdminTemplate = ({ Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (localStorage.getItem('userLogin')) {

            let userLogin = JSON.parse(localStorage.getItem('userLogin'))
            if (userLogin.maLoaiNguoiDung === 'QuanTri') {
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