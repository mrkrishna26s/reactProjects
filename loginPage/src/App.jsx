import Signin from "./component/Signin"
import Appbar from "./component/Appbar"
import Signup from "./component/signup"
function App() {

  return (
    <div style={{width:"100vw", height:"100vh", backgroundColor:"#eeeeee"}}>
      <Appbar />
      {/* <Signup /> */}
      <Signin />
    </div>
  )
}


export default App
