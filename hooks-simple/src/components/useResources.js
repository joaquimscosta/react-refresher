import { useState, useEffect } from "react";
import jsonPlaceholder from "./api/jsonPlaceholder";

const useResources = resource => {
  const [resources, setResources] = useState([]);
  useEffect(
    () => {
      (async resource => {
        const response = await jsonPlaceholder.get(`/${resource}`);
        setResources(response.data);
      })(resource);
    },
    [resource]
  );
  return resources;
};
export default useResources;
