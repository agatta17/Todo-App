import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({items, onClickDone, onClickDelete}) => (<ul className={styles.itemlist}>
  {items.map(item => <li key={item.id}>
		<Item 
		  value={item.value} 
		  isDone={item.isDone} 
		  onClickDone={onClickDone} 
		  id={item.id}
		  onClickDelete={onClickDelete}
		/>
  </li>)}
</ul>);

export default ItemList;