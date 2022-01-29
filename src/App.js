import './App.css';

function Userlist () {
  return (
    <div className="userlist">
      <h1>MAX</h1>
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">
      คุคุย
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
      คุยอะไรก็ไม่รู้
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
