import './App.css';
import Header from './components/Header/Header';
import Main from './views/main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main ClassName="Main-style" />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
