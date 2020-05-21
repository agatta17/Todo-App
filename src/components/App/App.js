import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const items = [
	{value: 'Сделать урок по React',
	isDone: true
},
	{value: 'Приготовить обед',
	isDone: true
},
	{value: 'Помыть посуду',
	isDone: false
}
];

const App = () => (<div className={styles.wrap}>
  <h1 className={styles.title}>todos</h1>
  <InputItem />
  <ItemList items = {items}/>
  <Footer count={3} />
</div>);

export default App;