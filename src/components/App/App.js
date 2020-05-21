import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const TodoItems = {
	first: 'Выполнить урок по React',
	second: 'Приготовить обед',
	third: 'Помыть посуду'
};

const App = () => (<div>
  <h1>todos</h1>
  <InputItem />
  <ItemList TodoItems = {TodoItems}/>
  <Footer count={5} />
</div>);

export default App;