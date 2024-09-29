import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Form from "./Form";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  client,
  getHelmets,
  getImpacts,
  deleteHelmets,
  deleteImpacts,
} from "./services/apiClient";

export default function App() {
  return (
    <Router>
      <Flex
        className="App"
        justifyContent="center"
        alignItems="center"
        direction="column"
        width="70%"
        margin="0 auto"
      >
        <Heading level={1}>HIGS Data Portal</Heading>

        <Divider />
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/form">Register impact</Link>
          {/* <Link to="/profile">Profile</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        {/* <Button onClick={getItems}>Get RestApi </Button>
        <Button onClick={getImpacts2}>Get Impacts RestApi </Button> */}
        {/* <Button onClick={getHelmets}>Get Helmets </Button>
        <Button onClick={deleteHelmets}>Delete Helmets </Button>
        <Button onClick={getImpacts}>Get Impacts </Button>
        <Button onClick={deleteImpacts}>Delete Impacts </Button> */}
      </Flex>
    </Router>
  );
}
