import Button from "./Button";

function App() {
  const name = "IT Shaala";
  return (
    <div className="container">
      <h1>{name}</h1>
      <Button buttonName={"Click Me"} textColor={"green"} />
      <br />
      <br />
      <Button buttonName={"Don't Click Me"} textColor={"black"} />
    </div>
  );
}

export default App;
