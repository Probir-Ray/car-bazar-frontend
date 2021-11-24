import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e => {
        const user = {email};
        fetch('https://desolate-gorge-65958.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(true);
        })
        e.preventDefault();
    }
    return (
        <div className="text-center mx-auto">
            <h3 className="my-5">Make an Admin</h3>
            {success && <Alert severity="success">Admin add successfully</Alert>}
            <form onSubmit={handleAdmin}>
                <TextField 
                sx={{ width: '50%' }}
                type="email" 
                onBlur={handleOnBlur} 
                label="Email" 
                variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;