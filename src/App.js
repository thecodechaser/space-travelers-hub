import './styles/MyProfile.css';
import './styles/App.css';
import './styles/Header.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
        path="/"
        element={(
          <Rockets />
        )}>
        </Route>
        <Route 
        path="/missions"
        element={(
          <Missions />
        )}></Route>
        <Route 
        path="/myprofile"
        element={(
          <MyProfile />
        )}></Route>
      </Routes>
    </>
  );
}

export default App;
