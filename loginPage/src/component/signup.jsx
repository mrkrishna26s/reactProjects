import Button from '@mui/material/Button';
import {Card, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function Signup(){
    //it is avoided to give anything id in the react
     const [email, setEmail]= useState("");
     const [password, setPassword]= useState("");
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
                <TextField 
                    onChange = {(e)=>{
                        setEmail(e.target.value);
                    }}
                    fullWidth={true} 
                    label="Email" 
                    variant="outlined" 
                /><br></br><br></br>
                <TextField 
                    onChange={(a)=>{
                        setPassword(a.target.value);
                    }}
                    fullWidth={true} 
                    label="password" 
                    variant="outlined" 
                /><br></br><br></br>
                <Button 
                size={'large'} 
                variant="contained"
                onClick={()=>{

                    fetch("http://localhost:3005/admin/signup",{
                        method: "POST",
                        body: JSON.stringify({
                            username: email,
                            password : password
                        }),
                        headers:{
                            "Content-Type" : "application/json"
                        }
                    }).then((res)=>{
                        res.json().then((data)=>{
                            console.log(data);
                            localStorage.setItem("token", data.token);// storing json token in the local storage
                            //because even if user closed the tab and whenever they open the side loken is there
                            //token still retain unless user clears the token or logged out.
                        })
                    })
                }}
                >SIGN UP</Button>
            </Card>
            </div>
    </div>
}
export default Signup