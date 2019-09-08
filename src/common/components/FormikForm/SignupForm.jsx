import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

class SignupForm extends Component {

    render() {
        return (
            <Grid container justify='center' alignContent='center' className='signin'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography variant="headline" gutterBottom>
                            Signin
                        </Typography>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Username</InputLabel>
                            <Input name='username' fullWidth />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Email</InputLabel>
                            <Input name='email' fullWidth />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Password</InputLabel>
                            <Input fullWidth name='password' type='password' />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Plan</InputLabel>
                            <Select
                                displayEmpty
                                name='plan'
                            >
                                <MenuItem value='basic'>Basic</MenuItem>
                                <MenuItem value='advance'>Advance</MenuItem>
                                <MenuItem value='enterprise'>Enterprise</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label='Receive new letter'
                        />
                        <FormControl fullWidth margin='normal'>
                            <Button
                                variant='extendedFab'
                                color='primary'
                                type='submit'
                            >
                                Signup
                                </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default SignupForm