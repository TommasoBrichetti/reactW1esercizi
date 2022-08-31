import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import WarningSign from './components/WarningSign';
import MyBedge from './components/MyBedge';
import BookList from './components/BookList';
// import Welcome from './components/Welcome'
// import LatestRelese from './components/LatestRelese'

function App() {
  return (
    <div>
      <MyNav/>
      {/* <Welcome/>
      <LatestRelese/> */}
      <WarningSign variant='danger'/>
      <MyBedge variant='primary'/>
      <BookList/>
      <MyFooter/>
    </div>
  );
}

export default App;
