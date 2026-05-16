import { useState } from "react";

import API from "../services/api";



function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const handleLogin = async () => {

    try {

      const response = await API.post(
        "/auth/login",
        {
          email,
          password
        }
      );



      localStorage.setItem(
        "token",
        response.data.token
      );



      window.location.href = "/dashboard";

      console.log(response.data);

    }

    catch(error) {

      console.log(error);

      alert("Login Failed");
    }
  };



  return (

    <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
      }}
    >

      <div
        style={{
          background:"#111827",
          padding:"40px",
          borderRadius:"12px",
          width:"350px"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            marginBottom:"20px"
          }}
        >
          BlockVote AI
        </h1>



        <input
          type="email"
          placeholder="Email"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

          style={{
            width:"100%",
            padding:"12px",
            marginBottom:"15px",
            border:"none",
            borderRadius:"8px"
          }}
        />



        <input
          type="password"
          placeholder="Password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

          style={{
            width:"100%",
            padding:"12px",
            marginBottom:"20px",
            border:"none",
            borderRadius:"8px"
          }}
        />



        <button

          onClick={handleLogin}

          style={{
            width:"100%",
            padding:"12px",
            background:"#2563eb",
            border:"none",
            borderRadius:"8px",
            color:"white",
            fontWeight:"bold"
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;