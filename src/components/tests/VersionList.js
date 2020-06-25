import React, { useEffect, useState } from "react";
import MiniVersionCard from "./MiniVersionCard";
import DataManager from "../../modules/DataManager";

const VersionList = (props) => {
  const [versions, setVersions] = useState([]);
  const userId = JSON.parse(sessionStorage.credentials);

  useEffect(() => {
    DataManager.getUsersRecipes(userId).then((recipesFromApi) => {
      const areVersions = recipesFromApi.recipes.filter(
        (checkVersion) => checkVersion.originalRecipeId !== null
      );
      setVersions(areVersions);
    });
  }, [userId]);

  return (
    <>
      <div className="container-cards">
        {() => {
          if (versions.length > 1) {
            versions.map((version) => (
              <MiniVersionCard key={version.id} version={version} {...props} />
            ));
          } else {
            props.history.push(`/test/${props.testId}`);
          }
        }}
      </div>
      {/* <button
        type="button"
        onClick={() => {
          props.history.push("/test/new");
        }}
      >
        Add Test
      </button> */}
    </>
  );
};

export default VersionList;
