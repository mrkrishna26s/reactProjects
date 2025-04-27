import Button from '@mui/material/Button';
import {Card, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function Signup(){
     const [email, setEmail]= useState("")
    return <div>
            <div style={{
                paddingTop:150,
                display:"flex",
                justifyContent:"center",
                marginBottom: 10 }}>
                <Typography variant={"h5"}>
                Welcome to Coursera. Sign up below
                </Typography>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:400, padding:20}}>
                <TextField fullWidth={true} id="username" label="Email" variant="outlined" /><br></br><br></br>
                <TextField fullWidth={true} id="password" label="password" variant="outlined" /><br></br><br></br>
                <Button 
                size={'large'} 
                variant="contained"
                onClick={()=>{
                    function callback2(){
                        console.log(data);
                    }
                    function callback1(res){
                        res.json().then(callback2)
                    }
                    let username = document.getElementById("username").value;
                    let password = document.getElementById("password").value;
                    fetch("http://localhost:3005/admin/signup",{
                        method: "POST",
                        body: JSON.stringify({
                            username,
                            password 
                        }),
                        headers:{
                            "Content-Type" : "application/json"
                        }
                    }).then(callback)
                }}
                >SIGN UP</Button>
            </Card>
            </div>
    </div>
}
export default Signup