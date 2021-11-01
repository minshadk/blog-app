const Home = () => {
  const hadleClick = (t) => {
    console.log("Button Clicked");
    console.log(t);
  };

  const handleClickAgain = (name) => {
    console.log("hellow" + name);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={hadleClick}>Click me</button>
      {/* <button
        onClick={() => {
          console.log("Anomynus Function");
          handleClickAgain(" Value as Parameter");
        }}
      >Anomynus Function</button> */}
      <button
        onClick={() => {
          handleClickAgain(" Value as Parameter");
        }}
      >
        Anomynus Function
      </button>
    </div>
  );
};

export default Home;
