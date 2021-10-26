import './App.css';
// import Modal from './components/modal/Modal';
import Accord from './components/Accord/Accord';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Modal></Modal> */}
      <Accord/>
    </div>
  );
}

export default App;