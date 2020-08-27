import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';
import noItems from './no-items.png';

const ItemList = ({items, moveItems}) => {
  return (
    <>
      {!items.length && <div className={styles.noitems}><img src={noItems}></img></div>}
      <ul className={styles.itemlist}>
        {items.filter(item => item.hide == false).map((item, index) => <li key={item.id}>
          <Item 
            value={item.value} 
            isDone={item.isDone} 
            id={item.id}
            disabled={item.disabled}
            hide={item.hide}
            index={index}
            moveItems={moveItems}
          />
        </li>)}
      </ul>
    </>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ItemList;