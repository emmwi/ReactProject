import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputButton } from "./StyledComponents";

function ProfilePage() {
  const { username } = useParams();
  const [pointsProfile, setPointsProfile] = useState(0);
  const navigateBack = useNavigate();

  //motsvarighet till v-bind
  const innerPStyle = {
    margin: "auto",
    textAlign: "center",
    fontSize: "2rem",
  };
  //motsvarighet till v-bind
  /*använder spread för att kopiera alla egenskaper från innerPStyle och lägger till respektive färg fär att sedan använda detta i return där jag vill ha den specifika stilen.
  https://stackoverflow.com/questions/54606155/react-inline-style-with-const-and-text
  */

  const greenTextStyle = { ...innerPStyle, color: "#074E08" };
  const yellowTextStyle = {
    ...innerPStyle,
    color: "#FCE879",
    WebkitTextStroke: "1px black",
  };
  const orangeTextStyle = { ...innerPStyle, color: "#710B0B" };

  //ökar med 1 poäng när funktionen körs
  function addPoint() {
    setPointsProfile(pointsProfile + 1);
  }
  // skickar dig vidare till första sidan när man loggar ut
  function logOut() {
    navigateBack(`/`);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Profile Page</h1>
      <p>Hello {username}</p>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <h2>Points</h2>
        <h3>{pointsProfile}</h3>
      </div>

      <div>
        <p style={greenTextStyle}>Green</p>
        <InputButton type="button" onClick={addPoint} value="Add Green" />
      </div>
      <div>
        <p style={yellowTextStyle}>Yellow</p>
        <InputButton type="button" value="Add Yellow" onClick={addPoint} />
      </div>
      <div>
        <p style={orangeTextStyle}>Orange</p>
        <InputButton type="button" value="Add Orange" onClick={addPoint} />
      </div>
      <InputButton
        type="button"
        value="Log out"
        onClick={logOut}
        style={{ marginTop: "1rem" }}
      />
    </div>
  );
}

export default ProfilePage;
