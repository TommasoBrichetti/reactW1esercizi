import './App.css';
import CustomNav from './components/CustomNav';
import Home from './components/HomePage.Jsx';
import MovieList from './components/MovieList';
import MyFooter from './components/MyFooter';
import MySelector from './components/MySelector';

function App() {
  return (
    <div className='App'>
      <CustomNav/>
      <MySelector/>
      <MovieList url="http://www.omdbapi.com/?apikey=bca2e436&s=harry%20potter" title='Harry Potter'selector={'one'}/>
      <MovieList url="http://www.omdbapi.com/?apikey=bca2e436&s=matrix" title='Matrix'selector={'two'}/>
      <MovieList url="http://www.omdbapi.com/?apikey=bca2e436&s=star%20wars" title='Star Wors'selector={'three'}/>
      <MyFooter/>
    </div>
  );
}

export default App;
