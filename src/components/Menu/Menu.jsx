import React from 'react';
import './Menu.css';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import Header from '../Header/Header';

const Menu = () => {
  
  const {user, onClose} = useTelegram();
  
  return (
    <div className={'Menu'}>
        <Header >Действия:</Header>
        <Button icon={'local_grocery_store'} onClick={onClose} className={'expandedButton'}>Заказать</Button>
        <Button icon={'price_check'} onClick={onClose} className={'expandedButton'}>Мои заказы</Button>

        <Button icon={'receipt_long'} onClick={onClose} className={'expandedButton'}>Список заказов</Button>
        <Button icon={'mobile_friendly'} onClick={onClose} className={'expandedButton'}>Добавить админа</Button>
    </div>
  )
}

export default Menu 