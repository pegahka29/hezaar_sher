import './App.css';
import Home from './components/Home'
import Tabs from './components/Tabs'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Tabs/>
      </header>
        <Home/>
    </div>
  );
}

export default App;
