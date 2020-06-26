import React, { useEffect, useState } from "react";
import MiniVersionCard from "./MiniVersionCard";
import DataManager from "../../modules/DataManager";

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
        <h1 className="versionsHeader">Version History</h1>
        {versions.map((version) => (
          <MiniVersionCard key={version.id} version={version} {...props} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          props.history.push(`/test/${props.match.params.testId}/versions/new`);
        }}
      >
        New Version
      </button>
    </>
  );
};

export default VersionList;
