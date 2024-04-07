import PropsRules from "./PropsRules";
import ListComponents from "./ListComponents";
import Accordion from "react-bootstrap/Accordion";
import "./Rules.css";

function Rules() {
  const carItems = ["Red Car", "Yellow car", "Green Car"];
  const AllowedCarItem = [
    "Mon-Sun, Yellow Cars ",
    "Mon-Sat, Green Cars",
    "Mon-Fri + Sun, Red Cars",
    "Mon-Fri, orange Cars",
  ];
  const NotAllowedCars = [
    "Green Cars  AreNot Allowed on Sundays",
    "Red Cars Are Not Allowed on Saturdays",
    '"My Car" or "Min Bil", Never Allowed',
  ];

  return (
    <>
      <div id="info-container">
        <h1>Genereal rules</h1>
        <p>
          Yellow Cars gives one point, IF there is a Red Car in sight when the
          oponent claims their point you are allowed to neutralize the point
        </p>
        <p>
          Green Cars can on certain days give points as well, No other color can
          neutralize this Point.
        </p>
        <p>
          There is no such thing as &quot;My Car&quot;. Latest update:{" "}
          <em>TODAY</em>
        </p>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <PropsRules
              className="rule-style"
              header={"Which cars are allowed"}
              ruleInformation={
                'In "Gul Bil" there is a few different colors to look for'
              }
            />
          </Accordion.Header>
          <Accordion.Body>
            <h3>Cars that are allowed</h3>
            <ListComponents items={carItems} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <PropsRules
              header={"Rules on different days"}
              ruleInformation={'Not all cars are "Game" every day of the week'}
            />
          </Accordion.Header>
          <Accordion.Body>
            <h3>Cars Allowed and which day</h3>
            <ListComponents items={AllowedCarItem} />
          </Accordion.Body>
          <Accordion.Body>
            <h3>Cars that are NOT allowed on certain days</h3>
            <ListComponents items={NotAllowedCars} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default Rules;
