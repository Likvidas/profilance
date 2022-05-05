import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import News from '../../pages/News/News';
import { Header } from '../Header/Header';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
