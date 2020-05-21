import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const items = [
	{value: 'Сделать урок по React'},
	{value: 'Приготовить обед'},
	{value: 'Помыть посуду'}
];

const App = () => (<div>
  <h1>todos</h1>
  <InputItem />
  <ItemList items = {items}/>
  <Footer count={3} />
</div>);

export default App;