import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

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

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ItemList;