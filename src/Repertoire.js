import React, { useState } from "react";
import ApplicationViews from "./components/ApplicationViews";
import TapBar from "./components/navbars/TapBar";

const Repertoire = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated());
  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
      <TapBar />
    </>
  );
};

export default Repertoire;
