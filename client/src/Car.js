const Car = ({ what }) => {
  return <>{what === "we" ? <Goal props={what} /> : <Missed />}</>;
};

const Missed = ({ what }) => {
  return <>Goal Missed</>;
};

const Goal = ({ props }) => {
  return <>{props} Goaled...</>;
};

export default Car;
