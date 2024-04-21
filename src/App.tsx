import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import UserRoutes from "./Routes/userRoutes";
import './globals.css'



function App() {
  return(
    <>
   <Router>
      <Routes>
   <Route path="/*" element={<UserRoutes/>}/>
      </Routes>
      </Router>
    
    
    
    </>
  )
}
export default App