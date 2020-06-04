import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';

function App() {

	return (
    <Router>
      <div className={styles.wrap}>
        <AppBar position='static' color='transparent'>
          <MenuList className={styles.menu} id="simple-menu">
            <Link className={styles.link} to='/'><MenuItem>Обо мне</MenuItem></Link>
            <Link className={styles.link} to='/todo'><MenuItem>Задачи</MenuItem></Link>
            <Link className={styles.link} to='/contacts'><MenuItem>Контакты</MenuItem></Link>
          </MenuList>
        </AppBar>
        <Card className={styles.content}>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </Card>
      </div>
    </Router>);
  
};

export default App;