import React, { useState } from "react";
import ApplicationViews from "./components/ApplicationViews";
import TopNavBar from "./components/navbars/TopNavBar";

const Repertoire = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  const [hasUser, setHasUser] = useState(isAuthenticated());
  const setUser = (user) => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <TopNavBar
        hasUser={hasUser}
        isAuthenticated={isAuthenticated}
        setHasUser={setHasUser}
      />
      <ApplicationViews
        isAuthenticated={isAuthenticated}
        setHasUser={setHasUser}
        hasUser={hasUser}
        setUser={setUser}
      />
    </>
  );
};

export default Repertoire;
