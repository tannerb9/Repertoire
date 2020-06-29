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
      <ApplicationViews
        isAuthenticated={isAuthenticated}
        setHasUser={setHasUser}
        hasUser={hasUser}
        setUser={setUser}
      />
      <TapBar hasUser={hasUser} />
    </>
  );
};

export default Repertoire;
