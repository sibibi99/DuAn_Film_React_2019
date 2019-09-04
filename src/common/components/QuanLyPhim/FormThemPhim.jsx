import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

class FormThemPhim extends Component {

    render() {
        return (
            <Grid container justify='center' alignContent='center' className='signin'>
                <Grid item xs={6} md={10}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginBottom: '50px' }}>
                        <Typography variant="h5" color='secondary' gutterBottom>
                            Form Thêm Phim Mới
                        </Typography>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Mã Phim</InputLabel>
                            <Input name='maPhim' fullWidth />
                        </FormControl>
                       
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Tên Phim</InputLabel>
                            <Input name='tenPhim' fullWidth />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Mô tả</InputLabel>
                            <Input fullWidth name='moTa' />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Link Ảnh</InputLabel>
                            <Input fullWidth name='moTa' />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Link Trailer</InputLabel>
                            <Input fullWidth name='moTa' />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Đánh Giá</InputLabel>
                            <Input fullWidth name='moTa' />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Ngày Công Chiếu</InputLabel>
                            <Input fullWidth name='moTa' />
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
        )
    }
}

export default FormThemPhim