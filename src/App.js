import './App.css';
import AppHeader from './components/AppHeader'
import TattooItem from './components/TattooItem'
import TattooPost from './components/TattooPost'

function App() {
    return(
        <div className="app">
            <AppHeader />
            <div className="app-grid">
               <TattooItem title="Germany" thumbnailUrl="/images/germany.png" />
               <TattooItem title="Thailand" thumbnailUrl="/images/thailand.png" />
               <TattooItem title="Switzerland" thumbnailUrl="/images/switzerland.png" />
               <TattooItem title="United kingdom" thumbnailUrl="/images/united-kingdom.png" />
            </div>
            {/* <TattooPost /> */}
        </div>
    )

}

export default App;
