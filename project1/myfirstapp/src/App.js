function App() {
  const currentDate = new Date();
  
  return (
    <div>
      <h1>Hello Pat-World!</h1>
      <h2>
        The Time now is {currentDate.toLocaleTimeString()}. <br/>
        The Date is {currentDate.toLocaleDateString()}.
      </h2>
    </div>
  );
}

export default App;