import About from "./Component/About";
import "./App.css"; // Import your CSS file
import "./index.css"
import { useState } from "react"
import Navbar from "./Component/Navbar"
import TextForm from "./Component/TextForm"
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Alert from "./Component/Alert1";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"

function App() {
const [mode, setMode]=useState('light');
const [alert,setAlert]=useState(null);
const [background,setBackground]=useState("light");
const removeBodyClass=()=>{
  document.body.classList.remove("success");
  document.body.classList.remove("primary");
  document.body.classList.remove("danger");
  document.body.classList.remove("warning");
}
const toggleMode=(cls)=>{
  removeBodyClass();
  console.log(cls);
  document.body.classList.add('bg-'+cls);
  if(mode==="light"){
    setMode('dark');
   setBackground('dark')
   showAlert("Dark mode has been enabled", "success")
   document.title="TextUtils-Dark mode"
   //it is consider bad using setInterval
   setInterval(() => {
    document.title="TextUtils is an amzaing app!"
   }, 2000);
   setInterval(() => {
    document.title="Install Now TextUtils"
   }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='light';
    setBackground('light')
    showAlert("Light mode has been enabled", "success")
    document.title="TextUtils-Light mode"
  }

}
// const toggleModeYellow=()=>{
//   if(mode==="light"){
//     setMode('primary');
//    setBackground('yellow')
//    showAlert("Dark mode has been enabled", "success")
//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor='light';
//     setBackground('light')
//     showAlert("Light mode has been enabled", "success")
//   }

// }
// const toggleModeRed=()=>{
//   if(mode==="light"){
//     setMode('dark');
//    setBackground('dark')
//    showAlert("Dark mode has been enabled", "success")
//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor='light';
//     setBackground('light')
//     showAlert("Light mode has been enabled", "success")
//   }

// }
// const toggleModeBlue=()=>{
//   if(mode==="light"){
//     setMode('dark');
//    setBackground('dark')
//    showAlert("Dark mode has been enabled", "success")
//   }
//   else{
//     setMode('light');
//     document.body.style.backgroundColor='light';
//     setBackground('light')
//     showAlert("Light mode has been enabled", "success")
//   }

// }
 const theme=createTheme({
   palette:{
    mode:mode,
   }
 })

 const showAlert=(message, type)=>{
  setAlert({
    msg:message,
    type:type,
  })  
  setTimeout(() => {
    setAlert(null);
  }, 1500);

 }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box bgcolor={"background.default"} color={"text.primary"} minHeight="100vh">
          <Router>
            <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
              <Route exact path="/about" element={<About showAlert={showAlert}  />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>

    </>
  )
}

export default App
