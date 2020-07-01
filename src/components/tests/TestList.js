import React, { useEffect, useState } from "react";
import MiniTestCard from "./MiniTestCard";
import DataManager from "../../modules/DataManager";
import "../../styles/lists.css";

const TestList = (props) => {
  const [tests, setTests] = useState([]);
  const userId = JSON.parse(sessionStorage.credentials);

  // ADD TESTCOUNT PROP TO RECIPE?
  useEffect(() => {
    DataManager.getUsersRecipes(userId).then((testsFromApi) => {
      const areFirstTest = testsFromApi.recipes.filter(
        (checkTest) => checkTest.versionNumber === 1
      );
      setTests(areFirstTest);
    });
  }, [userId]);

  return (
    <>
      <div className="container-cards">
        <h3 className="tab">Tests</h3>
        {tests.map((test, index) => (
          <MiniTestCard
            color={index % 2 ? "#FFFFFF" : "#D3D3D3"}
            key={test.id}
            test={test}
            {...props}
          />
        ))}
      </div>
      <button
        className="add-button"
        onClick={() => {
          props.history.push("/test/new");
        }}
      >
        &#x2b;
      </button>
    </>
  );
};

export default TestList;
