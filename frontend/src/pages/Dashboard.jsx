import { useEffect, useState } from "react";

import API from "../services/api";



function Dashboard() {

  const [walletAddress, setWalletAddress]
  = useState("");

  const [elections, setElections]
  = useState([]);




  useEffect(() => {

    fetchElections();

  }, []);




  const fetchElections = async () => {

    try {

      const response = await API.get(
        "/elections"
      );

      setElections(response.data);

    }

    catch(error) {

      console.log(error);
    }
  };




  const handleVote = async (
    electionId
  ) => {

    try {

      const token =
      localStorage.getItem("token");



      await API.post(

        "/votes/cast",

        {
          electionId,
          candidateIndex: 0
        },

        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }
      );



      alert(
        "Vote Cast Successfully"
      );

    }

    catch(error) {

      console.log(error);

      alert("Voting Failed");
    }
  };




  const connectWallet = async () => {

    try {

      if (!window.ethereum) {

        alert(
          "MetaMask Not Installed"
        );

        return;
      }



      const accounts =
      await window.ethereum.request({

        method:
        "eth_requestAccounts"
      });



      setWalletAddress(accounts[0]);

    }

    catch(error) {

      console.log(error);
    }
  };




  return (

    <div
      style={{
        padding:"40px"
      }}
    >

      {/* MetaMask Button */}

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          marginBottom:"20px"
        }}
      >

        <button

          onClick={connectWallet}

          style={{
            padding:"10px 20px",
            background:"#9333ea",
            border:"none",
            borderRadius:"8px",
            color:"white",
            fontWeight:"bold"
          }}
        >

          {
            walletAddress

            ?

            walletAddress.slice(0,6)
            + "..."
            +
            walletAddress.slice(-4)

            :

            "Connect MetaMask"
          }

        </button>

      </div>



      <h1
        style={{
          marginBottom:"30px"
        }}
      >
        Elections Dashboard
      </h1>



      <div
        style={{
          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",

          gap:"20px"
        }}
      >

        {
          elections.map((election)=>(

            <div

              key={election._id}

              style={{
                background:"#111827",
                padding:"20px",
                borderRadius:"12px"
              }}
            >

              <h2>
                {election.title}
              </h2>



              <p
                style={{
                  marginTop:"10px",
                  marginBottom:"20px"
                }}
              >
                {election.description}
              </p>



              <button

                onClick={()=>
                  handleVote(election._id)
                }

                style={{
                  padding:"10px 20px",
                  background:"#2563eb",
                  border:"none",
                  borderRadius:"8px",
                  color:"white",
                  fontWeight:"bold"
                }}
              >
                Vote Now
              </button>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Dashboard;
ghk