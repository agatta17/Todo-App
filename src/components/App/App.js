import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Сделать урок по React',
        isDone: true,
        id: 1
      },
      {
        value: 'Приготовить обед',
        isDone: true,
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
    ],
    count: 6
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({items: newItemList});
    };
  

  render() {
  	return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Задачи на сегодня:</h1>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={this.state.count} />
      </div>);
  }
};

export default App;