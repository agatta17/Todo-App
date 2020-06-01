import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';


const Item = ({value, isDone, onClickDone, id, onClickDelete}) => (<div className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
	})
}>
	  <Checkbox 
	    checked={isDone ? "checked" : ""}
	    onClick={ () => onClickDone(id) }
	  /> 
	  {value}
	  <div 
	    className={styles.deleteitem}
	    onClick={ () => onClickDelete(id) }
	  >
	  </div>
</div>
);

export default Item;