import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A7C7E7",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/about" exact component={AboutUs} />
        </Switch>
        <Switch>
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
