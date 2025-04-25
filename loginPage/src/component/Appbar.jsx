import { Typography, Button } from "@mui/material";

function Appbar(){
return <div style={{
    display: "flex",
    justifyContent: "space-between",
    padding: 4
}}>
    <div><Typography variant={"h5"}>Coursera</Typography></div>
    <div style={{display:"flex"}}>
        <div style={{marginRight:10}}>
            <Button variant={"contained"}>SIGN IN</Button>
        </div>
        
        <div>
            <Button variant={"contained"}>SIGN IN</Button>
        </div>
    </div>

</div>
}
export default Appbar;