import { Box, Button, Typography } from "@mui/material";
import Accordin from "./Accordin.jsx";
import { useState } from "react";

const About = (props) => {
  const [btn, setBtn] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleDarkModeFunction = () => {
    if (darkModeEnabled) {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtn("Enable Dark Mode");
      props.showAlert("converted light mode successfully!","success")
    } else {
      setMyStyle({
        backgroundColor: "black",
        color: "white",
      });
      setBtn("Enable Light Mode");
      props.showAlert("converted dark mode successfully!","success")

    }

    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <>
      <Box bgcolor={"background.default"} color={"text.primary"}
        style={myStyle}
        sx={{ width: "80%", margin: "auto", marginTop: "20px" }}
      >
        <Typography variant="h2">About Us</Typography>
        <Accordin style={myStyle} />
        <Accordin style={myStyle} />
        <Accordin style={myStyle} />
        <Accordin style={myStyle} />
        <Button
          size="large"
          sx={{
            backgroundColor: "grey",
            color: "white",
            margin: "3px",
            "&:hover": {
              backgroundColor: "#e65100",
            },
          }}
          onClick={handleDarkModeFunction}
          
        >
          {btn}
      
        </Button>
      </Box>
    </>
  );
};

export default About;
