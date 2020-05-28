import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';


const Item = ({value, isDone}) => (<div className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
	})
}>
	  <Checkbox checked={isDone ? "checked" : ""}/> 
	  {value}
	  <div className={styles.deleteitem}></div>
</div>
);

export default Item;