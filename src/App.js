import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import CustomRoutes from './Routes';
import { ToastContainer } from 'react-toastify';
import './config/global';
function App() {
  return (
    <>
      <CustomRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
