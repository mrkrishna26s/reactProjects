import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from "./component/Signin"
import Appbar from "./component/Appbar"
import Signup from "./component/signup"
function App() {
  return(
    <div style={{width:"100vw",
                height:"100vh",
                backgroundColor:"#eeeeee"
    }}>
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element= {<Signin />} />
        <Route path="/login" element= {<Signin />} />
        <Route path="/signup" element= {<Signup />} />
      </Routes>
    </Router>
    </div>
  )
}


export default App
