import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
// import TattooPost from './components/TattooPost'
import tattoos from './data/tattoos'

function App() {
  // const [selectedTattoos, setSelectedTattoos] = useState(null)
  const tattooElement = tattoos.map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo}/>;
  })
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid">
        {tattooElement}
      </div>
      {/* <TattooPost /> */}
    </div>
  );
}

export default App;
