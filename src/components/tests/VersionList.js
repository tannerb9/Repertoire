import React, { useEffect, useState } from "react";
import MiniVersionCard from "./MiniVersionCard";
import DataManager from "../../modules/DataManager";
import "../../styles/lists.css";

const VersionList = (props) => {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    DataManager.getByProp(
      "recipes",
      "originalRecipeId",
      props.match.params.testId
    ).then((recipesFromApi) => {
      setVersions(recipesFromApi);
    });
  }, [props.match.params.testId]);

  return (
    <>
      <div className="container-cards">
        <h3 className="versionsHeader">Version History</h3>
        {versions.map((version) => (
          <MiniVersionCard key={version.id} version={version} {...props} />
        ))}
      </div>
      <button
        className="add-button"
        onClick={() => {
          props.history.push(`/test/${props.match.params.testId}/versions/new`);
        }}
      >
        &#x2b;
      </button>
    </>
  );
};

export default VersionList;
