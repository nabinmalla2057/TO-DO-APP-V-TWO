const Car = ({ wheel, color }) => {
  const handleClick = (color) => {
    alert(color);
  };
  return (
    <>
      I am a Car and i am {color} in color and i have {wheel} wheels <br />
      <input type="text" id="newColor" />
      <button
        onClick={() => handleClick(document.getElementById("newColor").value)}
      >
        Click me
      </button>
    </>
  );
};

export default Car;
