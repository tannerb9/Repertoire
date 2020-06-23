import React, { useEffect, useState } from "react";
import MiniTestCard from "./MiniTestCard";
import DataManager from "../../modules/DataManager";

const TestList = (props) => {
  const [tests, setTests] = useState([]);
  const userId = JSON.parse(sessionStorage.credentials);

  useEffect(() => {
    DataManager.getUsersRecipes(userId).then((testsFromApi) => {
      const areTests = testsFromApi.recipes.filter(
        (checkTest) => checkTest.isTest === true
      );
      setTests(areTests);
    });
  }, [userId]);

  return (
    <>
      <div className="container-cards">
        {tests.map((test) => (
          <MiniTestCard key={test.id} test={test} {...props} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          props.history.push("/test/new");
        }}
      >
        Add Test
      </button>
    </>
  );
};

export default TestList;
