import React from 'react';
import styles from './Contacts.module.css';
import telegram from './telegram.svg';
import instagram from './instagram.svg';
import vk from './vk.svg';
import gmail from './gmail.svg';

function Contacts() {
  return (
  	<>
	    <h1 className={styles.title}>Контакты</h1>
	    <div className={styles.icons}>
		    <a href='https://t.me/ryzhowski' target='blank'><img src={telegram} className={styles.img}></img></a>
		    <a href='https://www.instagram.com/ryzhowski/' target='blank'><img src={instagram} className={styles.img}></img></a>
		    <a href='https://vk.com/ad_ephimova' target='blank'><img src={vk} className={styles.img}></img></a>
		    <a href='mailto:ad.ephimova@gmail.com' target='blank'><img src={gmail} className={styles.img}></img></a>
		  </div>
    </>);
};

export default Contacts;
