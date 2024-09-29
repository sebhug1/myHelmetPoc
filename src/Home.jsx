import { useState, useEffect } from "react";
import { Button, Heading, Flex, Divider } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { client, getHelmets, postHelmet } from "./services/apiClient";
import { generateQrCode } from "./services/qrServices";
import { impactsToCsv } from "./services/impactServices";
import { v4 as uuidv4 } from "uuid";
import { errorToast, ToastContainer } from "./services/uiUtils";

export default function Home() {
  const { signOut } = useAuthenticator((context) => [context.user]);

  const [helmet, setHelmet] = useState({ helmetID: "", alias: "" });
  const [helmets, setHelmets] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleHelmetFormSubmit = async (event) => {
    event.preventDefault();
    helmet.helmetID = uuidv4();
    const { data: helmets, success: s2 } = await getHelmets();
    if (helmets.some(e => e["Alias"] === helmet.alias)) {
      errorToast("Helmet alias is already taken!");
      return
    }
    handleCreateHelmets(helmet);
    setHelmet({ helmetID: "", alias: "" });
  };

  const handleCreateHelmets = async (helmetData) => {
    try {
      const { data: json, success: success } = await postHelmet(helmet);
      generateQrCode(helmetData.helmetID);
      console.log("Helmet created successfully");
    } catch (error) {
      console.log("Failed to create helmets or operation cancelled: ", error);
    }
  };

  const handleHelmetChange = (event) => {
    setHelmet({ ...helmet, [event.target.name]: event.target.value });
  };

  return (
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <div>
        <Heading level={3}>Register new helmet</Heading>
        <form name="HelmetForm" onSubmit={handleHelmetFormSubmit }>
          {/* {error && <div className="error-message">{JSON.stringify(error)}</div>} */}
          <div className="form-container2">
          <label htmlFor="alias">Alias</label>
          <input
            className="allInputs"
            type="text"
            name="alias"
            value={helmet.alias}
            onChange={(e) => {
              handleHelmetChange(e);
              setIsSubmitDisabled(e.target.value.trim() === "");
            }}
            autoComplete="off"
            placeholder="Enter alias"
          />
          </div>
          <div className="submit-btn">
            <button type="submit" disabled={isSubmitDisabled}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <Divider />
      <Heading level={3}>Export data</Heading>
      <Button onClick={impactsToCsv}>Export impact data</Button>
      <Divider />
      <Button onClick={signOut}>Sign Out</Button>
      <ToastContainer/>
    </Flex>
  );
}
