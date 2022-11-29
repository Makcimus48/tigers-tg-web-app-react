import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Menu from './components/Menu/Menu';
import { Button } from '@mui/material';

function App() {

  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path={'ProductList'} element={<ProductList />}/>
        <Route index element={<Menu />}/>
      </Routes>
    </div>
  );
}

export default App;
