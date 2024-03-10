import { useState } from 'react';
import './App.scss';
import Header from './component/Header';
import TableUsers from './component/TableUsers';

import Container from 'react-bootstrap/Container'; // Căn giữa điều 2 bên
import ModalAddNew from './component/ModalAddNew';


function App() {

  const [isShowModal, setWhowModal] = useState(false);
  const handleClose = () => {
    setWhowModal(false);
  }

  return (
    <div className='app-container'>
      
      <Header />
      <Container>
        <div className='my-3 add-new'>
          <span> <b>List User:</b> </span>
          <button className='btn btn-success' onClick={() => setWhowModal(true)}>
            Add New User
          </button>
        </div>
        <TableUsers />
      </Container>
      
      <ModalAddNew 
        show = {isShowModal}
        handleClose = {handleClose}
      />
    </div>
  );
}

export default App;
