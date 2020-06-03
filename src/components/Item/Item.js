import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

class Item extends React.Component {
	componentDidMount() {
		console.log('componentDidMount');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	render() {
		const {value, isDone, onClickDone, id, onClickDelete} = this.props;
		return (
			<div className={
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
			</div>);
	}
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
};

export default Item;