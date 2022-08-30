import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelese from './components/LatestRelese'

function App() {
  return (
    <div>
      <MyNav/>
      <Welcome/>
      <LatestRelese/>
      <MyFooter/>
    </div>
  );
}

export default App;
