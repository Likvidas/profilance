import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import News from '../../pages/News/News';
import { getIsShowModal } from '../../store/selectors';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { Popup } from '../Popup/Popup';
import './App.scss';

const App: FC = () => {
  const isShowModal = useSelector(getIsShowModal);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
      {isShowModal && (
        <Modal>
          <Popup />
        </Modal>
      )}
    </div>
  );
};

export default App;
