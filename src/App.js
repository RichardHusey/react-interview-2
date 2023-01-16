import react, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React-Interview-2-Mockup-Images</h1>
      <RobotList />
    </div>
  );
}

const RobotList = () => {
  const [robotName, setRobotName] = useState("");
  const [robotList, setRobotList] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    setRobotList([...robotList, robotName]);
    setRobotName("");
  };

  return (
    <div
      className="robot-list"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder={"Please Input Robot Name!"}
          value={robotName}
          onChange={(e) => setRobotName(e.target.value)}
        />
      </form>
      <div
        className="robot-images"
        display={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {robotList.map((value, index) => (
          <img
            key={index}
            width={200}
            height={200}
            src={`https://robobash.org/${value}`}
            onClick={() => {
              setRobotList(robotList.filter((robot) => robot != value));
            }}
          />
        ))}
      </div>
    </div>
  );
};
