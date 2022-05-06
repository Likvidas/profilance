import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import { getIsShowModal } from '../../store/modal/selectors';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
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
