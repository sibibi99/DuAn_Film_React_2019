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
import themPhimAction from '../../../pages/QuanLyPhim/action'
import { bindActionCreators } from 'redux';



class FormThemPhim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCinemas: {},
      checkedCinemas: []
    };
  }

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
              <FormControl fullWidth margin='normal' error={this.props.touched.maPhim && !!this.props.errors.maPhim} >
                <InputLabel>Mã Phim</InputLabel>
                <Field
                  name='maPhim'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.maPhim && <FormHelperText>{this.props.errors.maPhim}</FormHelperText>}
              </FormControl>

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

              <FormControl fullWidth margin='normal' error={this.props.touched.linkAnh && !!this.props.errors.linkAnh}>
                <InputLabel>Link Ảnh</InputLabel>
                <Field
                  name='linkAnh'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.linkAnh && <FormHelperText>{this.props.errors.linkAnh}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth margin='normal' error={this.props.touched.linkTrailer && !!this.props.errors.linkTrailer} >
                <InputLabel>Link Trailer</InputLabel>
                <Field
                  name='linkTrailer'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.linkTrailer && <FormHelperText>{this.props.errors.linkTrailer}</FormHelperText>}
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
              <FormControl fullWidth margin='normal' error={this.props.touched.ngayCongChieu && !!this.props.errors.ngayCongChieu}>
                <InputLabel>Ngày Công Chiếu</InputLabel>
                <Field
                  name='ngayCongChieu'
                  render={({ field }) => (
                    <Input fullWidth {...field} />
                  )}
                />
                {this.props.touched.ngayCongChieu && <FormHelperText>{this.props.errors.ngayCongChieu}</FormHelperText>}
              </FormControl>


              <FormControl fullWidth margin='normal' >
                <Button
                  variant='contained'
                  color="secondary"
                  type='submit'
                >
                  Thêm Phim Mới
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
      maPhim: '',
      tenPhim: '',
      moTa: '',
      linkAnh: '',
      linkTrailer: '',
      danhGia: '',
      ngayCongChieu: '',
    }
  },
  validationSchema: Yup.object().shape({ // Validate form field
    maPhim: Yup.string()
      .required('Không được bỏ trống!'),
    tenPhim: Yup.string()
      .required('Không được bỏ trống!'),
    moTa: Yup.string()
      .required('Không được bỏ trống!'),
    linkAnh: Yup.string()
      .required('Không được bỏ trống!'),
    linkTrailer: Yup.string()
      .required('Không được bỏ trống!'),
    danhGia: Yup.string()
      .required('Không được bỏ trống!'),
    ngayCongChieu: Yup.string()
      .required('Không được bỏ trống!'),

  }),
  handleSubmit(phim) {
    this.props.dispatch(phim)

  }

})(FormThemPhim)

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (phim) => {
      //Loi o day
      dispatch(themPhimAction(phim));
    }
  }
}
export default connect(null, mapDispatchToProps)(FormikForm)