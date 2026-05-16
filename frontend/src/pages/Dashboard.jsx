function Dashboard() {

  return (

    <div
      style={{
        padding:"40px"
      }}
    >

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
          gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
          gap:"20px"
        }}
      >

        <div
          style={{
            background:"#111827",
            padding:"20px",
            borderRadius:"12px"
          }}
        >

          <h2>College Election</h2>

          <p
            style={{
              marginTop:"10px",
              marginBottom:"20px"
            }}
          >
            Student Council Voting
          </p>



          <button
            style={{
              padding:"10px 20px",
              background:"#2563eb",
              border:"none",
              borderRadius:"8px",
              color:"white"
            }}
          >
            Vote Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;