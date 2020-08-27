import React from 'react';
import styles from './Footer.module.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';


function Footer ({count, onClickDeleteCompleted, hideCompleted, hideActive, displayAll, bottomNavigationValue}) {
  return(<footer className={styles.footer}>
    <BottomNavigation
      value={bottomNavigationValue}
      onChange={(event, newValue) => {
        switch (newValue) {
          case 'active':
            hideCompleted();
            break;
          case 'completed':
            hideActive();
            break;
          default: 
            displayAll();
        }
      }}
      showLabels
    >
      <BottomNavigationAction label='Все' value='all'/>
      <BottomNavigationAction label='Активные' value='active'/>
      <BottomNavigationAction label='Выполненные' value='completed'/>
    </BottomNavigation>
  
  <span className={styles.left}> Невыполненных задач: {count} </span>

  <Link 
    component='button' variant='body2' 
    onClick={ () => onClickDeleteCompleted() }
  >
    Удалить выполненные задачи
  </Link>

</footer>)}

Footer.defaultProps = {
  count: 0,
};

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Footer;