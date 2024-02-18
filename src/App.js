import './App.css';
import Header from './components/Header/Header';
import Menu from './components/MainMenu/Menu';
import Profile from './components/Profile/Profile';
import History from './components/History/History';
import Book from './components/Book/Book';
import Author from './components/Author/Author';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = (props) => {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/history/*" element={<History state={props.appState.historyPage} />} />
            <Route path="/" element={<Profile />} />
            <Route path="/books/*" element={<Book state={props.appState.booksPage} addBook={props.addBook} />} />
            <Route path="/authors/*" element={<Author state={props.appState.authorsPage} />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>


  );
}

export default App;
