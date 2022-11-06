
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {getMoviesByName, getMovieDetailsById} from './utils'

getMovieDetailsById('0030850')
getMoviesByName("Ant-man")

function App() {
  return (
   <div className="App">
      <h1>Welcome to the Movies</h1>
    </div>
  );
}

export default App;
