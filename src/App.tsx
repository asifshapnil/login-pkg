import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './module/signin';
import Profile from './module/profile';
import { Login } from './package';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
