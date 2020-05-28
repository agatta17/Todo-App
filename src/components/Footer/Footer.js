import React from 'react';
import styles from './Footer.module.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Link from '@material-ui/core/Link';

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Все" />
      <BottomNavigationAction label="Активные" />
      <BottomNavigationAction label="Выполненные" />
    </BottomNavigation>
  );
};

const Footer = ({count}) => (<footer className={styles.footer}>

  {SimpleBottomNavigation()}
  
  <span className={styles.left}> Невыполненных задач: {count} </span>

  <Link component="button" variant="body2" onClick={() => {
    console.info("I'm a button.");
    }}
  >
    Удалить выполненные задачи
  </Link>

</footer>);

export default Footer;