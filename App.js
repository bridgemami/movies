
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {getMoviesByName, getMovieDetailsById} from './utils'

getMovieDetailsById('0030850')
getMoviesByName("Ant-man")

function App() {
  return (
   <div className="App">
      <h1>Welcome to the Movies</h1>
      <p>Let's have some fun</p>
      <p>kkkk</p>
    </div>
  );
}

export default App;
