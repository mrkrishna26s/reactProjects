import Button from '@mui/material/Button';
import {Card, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
function Signin(){
    return <div>
            <div style={{
                paddingTop:150,
                display:"flex",
                justifyContent:"center",
                marginBottom: 10 }}>
                <Typography variant={"h5"}>
                Welcome Back, Sign in below
                </Typography>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Card variant={"outlined"} style={{width:400, padding:20}}>
                <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" /><br></br><br></br>
                <TextField fullWidth={true} id="outlined-basic" label="password" variant="outlined" /><br></br><br></br>
                <Button size='large' variant="contained">SIGN IN</Button>
            </Card>
            </div>
    </div>
}
export default Signin