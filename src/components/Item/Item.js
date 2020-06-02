import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Item = ({value, isDone, onClickDone, id, onClickDelete}) => (<div className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
	})
	}>
	  <Checkbox 
	    checked={isDone}
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

Item.defaultProps = {
	isDone: false,
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default Item;