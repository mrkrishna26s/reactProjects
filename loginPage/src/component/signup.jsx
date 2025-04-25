function Signup(props){
    return <div>
        <center>
            <div style={{
                marginTop:150,
                marginBottom: 10
            }}>Welcome to Coursera. Sign up below</div>

        </center>
        <center>
            <div style={{
                border:"2px solid black",
                width:400,
            }}>
            usernme - <input type={"text"}></input><br></br>
            password - <input type={"password"}></input><br></br>
            <button>signup</button>
            </div>
        </center>
    </div>
}
export default Signup