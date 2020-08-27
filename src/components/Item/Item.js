import React, { useRef } from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { ItemsContext } from '../../itemsContext';
import InputBase from '@material-ui/core/InputBase';
import { ItemTypes } from '../../ItemTypes';
import { useDrag, useDrop } from 'react-dnd';

const inputBaseStyle = {
  textDecoration: 'line-through',
  cursor: 'move'
}

function Item({value, isDone, id, disabled, hide, index, moveItems}) {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveItems(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ITEM, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <ItemsContext.Consumer>
      {({onClickDone, onClickDelete, onEditItem, onChangeValue, onBlurItem}) => (<React.Fragment>
        <div style={{opacity}} ref={ref} className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
        }>
          <Checkbox 
            checked={isDone}
            onClick={ () => onClickDone(id) }
          /> 
          {disabled ? 
            <div>
              {value}
            </div> : 
            <InputBase
              defaultValue={value}
              autoFocus
              multiline
              onBlur={ event => onBlurItem(id, event.target.value.toUpperCase()) }
              onChange={ event => event.target.value.toUpperCase() }
              onKeyPress={ event => {if (event.key === 'Enter') {onBlurItem(id, event.target.value.toUpperCase())};} }
            />
          }
          <div 
            className={styles.edititem}
            onClick={ () => onEditItem(id) }
          >
          </div>
          <div 
            className={styles.deleteitem}
            onClick={ () => onClickDelete(id) }
          >
          </div>
        </div>
      </React.Fragment>)}
    </ItemsContext.Consumer>
  );
}

Item.defaultProps = {
  isDone: false,
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired
};

export default Item;