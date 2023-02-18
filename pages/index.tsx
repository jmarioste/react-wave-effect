import type { NextPage } from "next";

import AnimatedWave from "../components/AnimatedWave";

const Home: NextPage = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div style={{ flexGrow: 1 }}>Header</div>

      <div style={{ position: "relative" }}>
        <AnimatedWave
          color={"#3E54AC"}
          animationDuration="4s"
          opacity={"0.8"}
        />
        <AnimatedWave
          color={"#3E54AC"}
          animationDuration="12s"
          opacity={"0.5"}
        />
        <AnimatedWave
          color={"#3E54AC"}
          animationDirection="reverse"
          animationDuration="10s"
          opacity={"0.2"}
        />
      </div>
    </div>
  );
};

export default Home;
