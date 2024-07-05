function Increment(props) {

    //This incement the value
  const increment = () => {
    //alert("it has incremented!");
    props.setCounter(props.counter +1)
  };

  return (
    <button
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "10px 16px",
        borderRadius: "5px",
        margin: "5px",
      }}
      onClick={increment}
    >
      Increment
    </button>
  );
}
export default Increment;
