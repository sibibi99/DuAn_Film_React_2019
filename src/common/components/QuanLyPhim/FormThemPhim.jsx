import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { FormHelperText } from '@material-ui/core';
import { connect } from 'react-redux';
import {themPhimAction} from '../../../pages/QuanLyPhim/action'



class FormThemPhim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCinemas: {},
      checkedCinemas: [],
      dateTime: null
    };
  }
  setDate = (dateTime) => this.setState({ dateTime })

  render() {

    const {
      handleSubmit
    } = this.props;
    return (
      <Form onSubmit={handleSubmit} >
        <Grid container justify='center' alignContent='center' className='signin'>
          <Grid item xs={6} md={8}>
            <Paper elevation={4} style={{ padding: '20px 15px', marginBottom: '50px' }}>
              <Typography variant="h5" color='secondary' gutterBottom>
                Form Thêm Phim Mới
               </Typography>

              <FormControl fullWidth margin='normal' error={this.props.touched.tenPhim && !!this.props.errors.tenPhim}>
                <InputLabel>Tên Phim</InputLabel>
                <Field
                  name='tenPhim'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.tenPhim && <FormHelperText>{this.props.errors.tenPhim}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth margin='normal' error={this.props.touched.moTa && !!this.props.errors.moTa} >
                <InputLabel>Mô tả</InputLabel>
                <Field
                  name='moTa'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.moTa && <FormHelperText>{this.props.errors.moTa}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth margin='normal' error={this.props.touched.hinhAnh && !!this.props.errors.hinhAnh}>
                <InputLabel>Link Ảnh</InputLabel>
                <Field
                  name='hinhAnh'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.hinhAnh && <FormHelperText>{this.props.errors.hinhAnh}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth margin='normal' error={this.props.touched.trailer && !!this.props.errors.trailer} >
                <InputLabel>Link Trailer</InputLabel>
                <Field
                  name='trailer'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.trailer && <FormHelperText>{this.props.errors.trailer}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth margin='normal' error={this.props.touched.danhGia && !!this.props.errors.danhGia}>
                <InputLabel>Đánh Giá</InputLabel>
                <Field
                  name='danhGia'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.danhGia && <FormHelperText>{this.props.errors.danhGia}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth margin='normal' error={this.props.touched.ngayKhoiChieu && !!this.props.errors.ngayKhoiChieu}>
                <InputLabel>Ngày Khởi Chiếu</InputLabel>
                <Field
                  name='ngayKhoiChieu'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.ngayKhoiChieu && <FormHelperText>{this.props.errors.ngayKhoiChieu}</FormHelperText>}
              </FormControl>


              <FormControl fullWidth  margin='normal'>
                <Button
                  variant='contained'
                  color="secondary"
                  type='submit'
                
                >
                  Thêm Phim Mới
                </Button>
              </FormControl>
              <FormControl fullWidth  >
              <Button
                  variant='contained'
                  color="inherit"
                  type='reset'
                  id='reset'
                
                >
                  Reset
                </Button>
              </FormControl>
             
            </Paper>
          </Grid>
        </Grid>
      </Form>
    )
  }
}

const FormikForm = withFormik({
  mapPropsToValues() { // Init form field
    return {
      // maPhim: '',
      tenPhim: '',
      moTa: '',
      hinhAnh: '',
      trailer: '',
      danhGia: '',
      ngayKhoiChieu: '',
    }
  },
  validationSchema: Yup.object().shape({ // Validate form field
    // maPhim: Yup.string()
    //   .required('Không được bỏ trống!'),
    tenPhim: Yup.string()
      .required('Không được bỏ trống!'),
    moTa: Yup.string()
      .required('Không được bỏ trống!'),
    hinhAnh: Yup.string()
      .url('Không đúng định dạng ảnh!')
      .required('Không được bỏ trống!'),
    trailer: Yup.string()
      .url('Không đúng định dạng ảnh!')
      .required('Không được bỏ trống!'),
    danhGia: Yup.string()
      .required('Không được bỏ trống!'),
    // ngayKhoiChieu: Yup.string()
    //   .required('Không được bỏ trống!'),

  }), // Đưa themPhim dispatch xuống redux
  handleSubmit(phim, {props}) {
    console.log(phim) 
    props.themPhim(phim)
  }

})(FormThemPhim)

const mapDispatchToProps = (dispatch) => {
  return {
    themPhim: (phim) => {
      dispatch(themPhimAction(phim));
    }
  }
}
export default connect(null, mapDispatchToProps)(FormikForm)