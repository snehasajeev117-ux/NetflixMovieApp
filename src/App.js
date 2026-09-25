import './App.css';
import Action from "./COMPONENTS/Action";
import Comedy from "./COMPONENTS/Comedy";
import Navbar from "./COMPONENTS/Navbar";
import TrendingMovies from "./COMPONENTS/TrendingMovies";
import Romance from "./COMPONENTS/Romance";
import Horror from "./COMPONENTS/Horror";


function App() {
  return (
    <div>
        <Navbar/>
        <TrendingMovies/>
        <Action/>
        <Comedy/>
        <Horror/>
        <Romance />
        
        
    </div>
  );
}

export default App;
