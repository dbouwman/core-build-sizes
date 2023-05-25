import React, { useState, useEffect } from "react";
import { getItem, getItemData } from "@esri/arcgis-rest-portal";


function ModelHack() {

  const [state, setState] = useState([])
  useEffect(() => {

    const ro = {
      portal: "https://qaext.arcgis.com/sharing/rest",
    }
    Promise.all([
      getItem("bbb90f365e064f48964ef9cadf53274e", ro),
      getItemData("bbb90f365e064f48964ef9cadf53274e", ro)
    ])
      .then(([item, data]) => {
        setState({ ...item, data });
      })

  }, []);

  return (
    <div>
      <h1>Model</h1>
      <p>What does it take to fetch and update an IModel, using rest-js?</p>
      <pre>
        <code>

        </code>
      </pre>
      <p>Here's a model fetched from a PortalItem:</p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}
export default ModelHack;