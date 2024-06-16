import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './scss/main.scss';
import HomePage from './pages/Home/HomePage';
import UserRoute from './pages/router/UserRoute';



const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/error/404' element={<>Not found.</>} />
          <Route path='/*' element={<UserRoute />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
