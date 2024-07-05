function Decrement(props) {

    //This decrement the value
  const decrement = () =>{
   // alert("It has decremented!")
   props.setCounter(props.counter -1)
  }

  return (
    <button
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px 16px",
        borderRadius: "5px",
        margin: "5px",
      }}
      onClick={decrement}
    >
      Decrement
    </button>
  );
}

export default Decrement;
