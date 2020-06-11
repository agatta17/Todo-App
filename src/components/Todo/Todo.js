import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

function Todo() {
  useEffect(() => {console.log('update')});
  useEffect(() => {console.log('mount')},[]);
  const [count, setCount] = useState(4);
  const [items, setItems] = useState(
    [
      {
        value: 'Сделать урок по React',
        isDone: false,
        id: 1
      },
      {
        value: 'Приготовить обед',
        isDone: false,
        id: 2
      },
      {
        value: 'Помыть посуду',
        isDone: false,
        id: 3
      },
      {
        value: 'Погулять с собакой',
        isDone: false,
        id: 4
      }
    ]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
    };
  
  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
    };

  const onClickAdd = value => {
      setItems(
        [...items, {
          value,
          isDone: false,
          id: count + 1
          }
        ]);
      setCount(count + 1)
  };
  
  return (
    <>
      <h1 className={styles.title}>Задачи на сегодня:</h1>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete} />
      <Footer count={count} />
    </>);
  
};

export default Todo;