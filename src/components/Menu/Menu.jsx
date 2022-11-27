import React from 'react';
import './Menu.css';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Menu = () => {
  
  const {user, onClose} = useTelegram();
  
  return (
    <div className={'Menu'}>
        <Button icon={'local_grocery_store'} onClick={onClose} className={'expandedButton'}>Заказать</Button>
        <Button icon={'price_check'} onClick={onClose} className={'expandedButton'}>Мои заказы</Button>
        <span className={'username'}>
            {user?.username}
        </span>
    </div>
  )
}

export default Menu 