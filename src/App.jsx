import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className=" vh-100">
      <h2 className="ms-4 ps-2 w-100 my-4">Physics 1</h2>
      <ul >
        <a
          href="/electron_in_magnetic_field.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-green-500 rounded hover:bg-blue-600"
        >
          Electron in Magnetic Field
        </a>
      </ul>

    </div>


  );
}

export default App;
