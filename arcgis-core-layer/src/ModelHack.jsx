import React, { useState, useEffect } from "react";
import PortalItem from '@arcgis/core/portal/PortalItem';
import Portal from '@arcgis/core/portal/Portal';

function ModelHack() {

  const [state, setState] = useState([])
  useEffect(() => {
    const portal = new Portal('https://qaext.arcgis.com');
    const portalItem = new PortalItem({ id: "bbb90f365e064f48964ef9cadf53274e", portal: portal })
    portalItem.load().then(() => {
      return portalItem.fetchData();
    }).then((data) => {
      const model = { ...portalItem.toJSON(), data };
      setState(model);
    })

  }, []);

  return (
    <div>
      <h1>Model</h1>
      <p>What does it take to fetch and update an IModel, using @arcgis/core?</p>
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