import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar/Navbar2';
import Searchbar from './Components/Searchbar/Searchbar';
import First from './Components/home/First';
import cardData from './data';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <hed className="heading">Where to Go ?</hed>
      <Navbar2/>
      <Searchbar/>
      <div className="first">
                <h1><b>Go on an award-winning adventure</b></h1>
                <h2>2024's Best of The Best Places To Go</h2>
            </div>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <First 
                        key={index}
                        image={card.image}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
    </div>
  );
}

export default App;
