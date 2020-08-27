import React, { useState, useEffect, useCallback } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import { ItemsContext } from '../../itemsContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const initialItems = [];

const initialCount = initialItems.length;

const saveToLocalStorage = items => {
  let serialItems = JSON.stringify(items);
  localStorage.setItem('items', serialItems);
};

function Todo() {
  let savedItems, savedCount;
  if (localStorage.length) {
    savedItems = JSON.parse(localStorage.getItem('items'));
    savedCount = parseInt(localStorage.getItem('count'), 10);
  } else {
    saveToLocalStorage(initialItems);
    localStorage.setItem('count', initialCount);
    savedItems = initialItems;
    savedCount = initialCount;
  }
  useEffect(() => {});
  useEffect(() => {console.log('mount')},[]);
  const [bottomNavigationValue, setBottomNavigationValue] = useState('all');
  const [count, setCount] = useState(savedCount);
  const [items, setItems] = useState(savedItems);

  const moveItems = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = items[dragIndex];
      const newItemList = update(items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      });
      setItems(newItemList);
      saveToLocalStorage(newItemList);
    },
    [items],
  );

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
        if (bottomNavigationValue !== 'all') {newItem.hide = !item.hide}
      }
      return newItem;
    });
    setItems(newItemList); 
    saveToLocalStorage(newItemList);
  };
  
  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
    saveToLocalStorage(newItemList);
  };

  const onClickAdd = value => {
    let hide = (bottomNavigationValue === 'completed') ? true : false;
    const newCount=count+1;
    const newItemList = [...items, {
        value,
        isDone: false,
        id: newCount,
        disabled: true,
        hide: hide
        }
      ];
    setItems(newItemList);
    setCount(newCount);
    saveToLocalStorage(newItemList);
    localStorage.setItem('count', newCount);
  };

  const onEditItem = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.disabled = false;
      }
      return newItem;
    });
    setItems(newItemList);
    saveToLocalStorage(newItemList);
  };

  const onBlurItem = (id, newValue) => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.value = newValue;
        newItem.disabled = true;
      }
      return newItem;
    });
    setItems(newItemList);
    saveToLocalStorage(newItemList);
  };

  const onClickDeleteCompleted = () => {
    const newItemList = items.filter(item => item.isDone === false);
    setItems(newItemList);    
    saveToLocalStorage(newItemList);
  };

  const hideCompleted = () => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.isDone === true) {
        newItem.hide = true;
      } else {
          newItem.hide = false;
        }
      return newItem;
    });
    setItems(newItemList);
    setBottomNavigationValue ('active');
    saveToLocalStorage(newItemList);
  };

  const hideActive = () => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.isDone === false) {
        newItem.hide = true;
      } else {newItem.hide = false}
      return newItem;
    });
    setItems(newItemList);
    setBottomNavigationValue ('completed');
    saveToLocalStorage(newItemList);
  }

  const displayAll = () => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
        newItem.hide = false;
      return newItem;
    });
    setItems(newItemList);  
    setBottomNavigationValue ('all');
    saveToLocalStorage(newItemList);
  }

  return (
    <>
      <h1 className={styles.title}>Задачи на сегодня:</h1>
      <InputItem onClickAdd={onClickAdd} items={items} />
      <ItemsContext.Provider value={{onClickDone, onClickDelete, onEditItem, onBlurItem}}>
        <DndProvider backend={HTML5Backend}>
          <ItemList  items={items} moveItems={moveItems}/>
        </DndProvider>
      </ItemsContext.Provider>
      <Footer bottomNavigationValue={bottomNavigationValue} count={items.filter(item => item.isDone === false).length} onClickDeleteCompleted={onClickDeleteCompleted} hideCompleted={hideCompleted} hideActive={hideActive} displayAll={displayAll}/>
    </>);
  
};

export default Todo;