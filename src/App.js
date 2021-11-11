
import './App.css';
import { Header } from '../src/components/Header/Header';
import { ListFoods } from './listFoods/ListFoods';
import { ModalInformation } from './ModalInformation/ModalInformation';
import { ModalCar } from './components/ModalCar/CardModal.js';
import { useState } from 'react';
import CartProvider  from '../src/source/CartProvider';


function App() {
  const [showModal, setShowModal] = useState(false);


  const showModalHandler = () => {
    setShowModal(true);
  }

  const backModalHandler = () => {
    setShowModal(false);
  }

  return (
    <CartProvider>
      {showModal && <ModalCar closeModal={backModalHandler} />}
      <Header onModal={showModalHandler} />
      <ModalInformation />
      <ListFoods />
    </CartProvider>
  );
}

export default App;
