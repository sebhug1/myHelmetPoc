import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  client,
  postHelmet,
  getHelmets,
  getImpacts,
  deleteHelmets,
  postImpact,
  deleteImpacts,
} from "./services/apiClient";
import { generateQrCode } from "./services/qrServices";
import { impactsToCsv } from "./services/impactServices";
import { get } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import { v4 as uuidv4 } from "uuid";
import { errorToast, successToast, ToastContainer } from "./services/uiUtils";

export default function InputForm() {
  const [impact, setImpact] = useState({
    Force: "",
    Direction: "",
    SortKey: "",
    helmetID: getUrlParameter("helmetId"),
  });
  const [helmet, setHelmet] = useState({ helmetID: "", alias: "" });
  const [impacts, setImpacts] = useState([]);
  const [helmets, setHelmets] = useState([]);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const fetchHelmets = async () => {
    const { data: helmetItems, success: success } = await getHelmets();
    // for (const item of helmetItems) {
    //   console.log(item);
    // }
    setHelmets(helmetItems);
  };

  const fetchImpacts = async () => {
    const { data: impactItems, success: success } = await getImpacts();
    // for (const item of impactItems) {
    //   console.log(item);
    // }
    setImpacts(impactItems);
  };

  useEffect(() => {
    fetchHelmets();
    fetchImpacts();
  }, []);

  const clearAllHelmets = async () => {
    try {
      const { data: helmets, success: success } = await deleteHelmets();
      setHelmets([]);
      console.log("All helmets cleared successfully");
    } catch (error) {
      console.error("Error clearing helmets:", error);
      //throw new Error("Error clearing helmets:", error);
    }
  };

  const clearAllImpacts = async () => {
    try {
      const { data: impacts, success: success } = await deleteImpacts();
      setImpacts([]);
      console.log("All impacts cleared successfully");
    } catch (error) {
      console.error("Error clearing impacts:", error);
      //throw new Error("Error clearing impacts:", error);
    }
  };

  const handleCreateImpacts = async (impactData) => {
    console.log(impactData);
    try {
      const { data: json, success: success } = await postImpact(impactData);
      if (success) {
        console.log("Impact created successfully");
        successToast("Impact created successfully");
        fetchImpacts();
      }
    } catch (error) {
      console.log("Failed to create Impacts or operation cancelled: ", error);
      errorToast("Failed to create Impacts");
    }
  };

  const handleImpactChange = (event) => {
    setImpact({ ...impact, [event.target.name]: event.target.value });
  };

  const handleImpactFormSubmit = (event) => {
    event.preventDefault();
    if (impact.helmetID == "") {
      errorToast("No helmet found");
      return;
    }
    impact.SortKey = uuidv4();
    handleCreateImpacts(impact);
    fetchImpacts();
    setImpact({ Force: "", Direction: "", SortKey: "", helmetID: getUrlParameter("helmetId") });
  };

  function getUrlParameter(param) {
    var pageUrl = window.location.search.substring(1);
    var urlVariables = pageUrl.split("&");
    for (var i = 0; i < urlVariables.length; i++) {
      var parameterName = urlVariables[i].split("=");
      if (parameterName[0] == param) {
        return parameterName[1];
      }
    }
    return "";
  }

  return (
    <div className="container">
      <Heading level={3}>Register impact</Heading>
      <div className="form-container">
        {/* <button onClick={clearAllHelmets}>Delete all entries</button> */}
        <form name="ImpactForm" onSubmit={handleImpactFormSubmit}>
          <div className="form-container2">
            <label htmlFor="force">Force</label>
            <input
              className="allInputs"
              type="text"
              name="Force"
              value={impact.Force}
              onChange={handleImpactChange}
              autoComplete="off"
              autoFocus={false}
              placeholder="Enter Force"
              min="1"
            />
          </div>
          <div className="form-container2">
            <label htmlFor="Direction">Direction</label>
            <input
              className="allInputs"
              type="text"
              name="Direction"
              value={impact.Direction}
              onChange={handleImpactChange}
              autoComplete="off"
              autoFocus={false}
              placeholder="Enter Direction"
              min="1"
            />
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
        {/* <button onClick={clearAllImpacts}>Delete all entries</button> */}
        {/* <div>
          <h2>Helmets List</h2>
          {helmets.map((h) => (
            <div key={`${h.HelmetID}-${h.SortKey}`}>
              <p>
                HelmetID: {h.HelmetID} - SortKey: {h.SortKey} - Alias: {h.Alias}
              </p>
              <hr />
            </div>
          ))}
          <h2>Impacts List</h2>
          {impacts.map((i) => (
            <div key={`${i.HelmetID}-${i.SortKey}`}>
              <p>
                HelmetID: {i.HelmetID} - SortKey: {i.SortKey} - Force: {i.Force}{" "}
                - Direction: {i.Direction} - createdAt: {i.createdAt}
              </p>
              <hr />
            </div>
          ))}
        </div> */}
      </div>
      <ToastContainer/>
    </div>
  );
}
