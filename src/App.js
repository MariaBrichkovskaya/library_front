import './App.css';
import Header from './components/Header/Header';
import Menu from './components/MainMenu/Menu';
import Profile from './components/Profile/Profile';
import History from './components/History/History';
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Menu />
      <History />
    </div>
  );
}

export default App;
