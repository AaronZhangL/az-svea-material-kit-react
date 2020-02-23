import { container } from "assets/jss/material-kit-react.jsx";

const componentsStyle = {
  container,
  paper: {
    background: "#FFF0",

  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "0px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  MultilineLeft: {
    margin: "10px 20px 0px",
    borderRadius: "6px",
    width: "95%",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  MultilineWrite: {
    margin: "10px -8px 0px",
    borderRadius: "6px",
    width: "95%",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  ButtonTranslate: {
    margin: "8px 0px 5px auto",
    borderRadius: "6px",
    width: "100px!important",
  },
  ButtonFeedback: {
    margin: "8px 0px 5px 20px",
    borderRadius: "6px",
    width: "100px!important",
  }

};

export default componentsStyle;
