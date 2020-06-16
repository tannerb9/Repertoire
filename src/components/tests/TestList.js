import React, { useEffect, useState } from "react";
import MiniTestCard from "./MiniTestCard";
import DataManager from "../../modules/DataManager";

const TestList = (props) => {
  const [tests, setTests] = useState([]);

  const getTests = () => {
    DataManager.getAll("recipes").then((testsFromApi) => {
      const areTests = testsFromApi.filter(
        (checkTest) => checkTest.isTest === true
      );
      setTests(areTests);
    });
  };

  useEffect(() => {
    getTests();
  }, []);

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
          props.history.push("/tests/new");
        }}
      >
        Add Recipe
      </button>
    </>
  );
};

export default TestList;
