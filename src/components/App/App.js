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
        isDone: true
      },
      {
        value: 'Приготовить обед',
        isDone: true
      },
      {
        value: 'Помыть посуду',
        isDone: false
      },
      {
        value: 'Погулять с собакой',
        isDone: false
      }
    ]
  };

  onClickDone = isDone => {
    console.log(isDone);
  }

  render() {
  	return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Задачи на сегодня:</h1>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={2} />
      </div>);
  }
};

export default App;