import React from 'react';
import Item from '../Item/Item';

const ItemList = ({TodoItems}) => (<ul>
	<li><Item TodoItem = {TodoItems.first}/></li>
	<li><Item TodoItem = {TodoItems.second}/></li>
	<li><Item TodoItem = {TodoItems.third}/></li>
	</ul>);

export default ItemList;