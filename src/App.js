import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";

function App() {


  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");


  const adminUser = {
    email: "akinselc@gmail.com",
    password: "123123123"
  }

  const Login = (details) => {

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })

    } else {

      setError("Details does not match");

    }
  }




  return (
    <div className="App">

      {(user.email !== "") ? <UserProfile user={user} setUser={setUser} /> : <LoginForm Login={Login} error={error} />}


    </div>
  );
}

export default App;
