import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import LoginPage from './login/LoginPage.jsx';
import MyPage from './my-page/MyPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyPage />
  </StrictMode>,
);
