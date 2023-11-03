import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Title from helmet</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Routing on progress</h1>
    </div>
  );
}

export default App;
