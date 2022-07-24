import { Row, Col, Button } from "react-bootstrap";

const GameOptionsComp = ({ disks, setDisks, reset, solve }) => {
  const otions = (
    <Row className="componentes">
      <Col>
        <div>
          {" "}
          <span>Discos: {disks}</span>{" "}
        </div>

        <Button
          variant="outline-secondary"
          onClick={() => {
            setDisks((disks += 1));
          }}
        >
          +
        </Button>

        <Button
          variant="outline-secondary"
          onClick={() => {
            if (disks >= 2) {
              setDisks((disks -= 1));
            }
          }}
        >
          -
        </Button>
      </Col>
      <Col>
        <br></br>
        <Button variant="outline-secondary" onClick={() => reset()}>
          Reiniciar
        </Button>
      </Col>
      <br></br>
      <Col>
        <Button variant="outline-secondary" onClick={() => solve()}>
          Resolver
        </Button>
      </Col>
    </Row>
  );
  return otions;
};

export default GameOptionsComp;
