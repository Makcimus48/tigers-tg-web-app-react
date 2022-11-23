import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Menu from './components/Menu/Menu';



import Icon from '@mui/material/Icon';


function App() {
  const {onToggleButton, tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'ProductList'} element={<ProductList />}/>
        <Route index element={<Menu />}/>
      </Routes>
      <Icon>local_grocery_store</Icon>
    </div>
  );
}

export default App;
