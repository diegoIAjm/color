import ColorHarmonizer from './components/ColorHarmonizer.tsx';
import ContrastChecker from './components/ContrastChecker.tsx'
import ColorRandom from './components/ColorRandom.tsx';

function App() {

  return (
    <div className="App">
      <h1> Clase de teoria del color con React</h1>
      <ColorHarmonizer />
      <hr />
      <ContrastChecker />
      <hr />
      <ColorRandom />
    </div>
  )
}

export default App