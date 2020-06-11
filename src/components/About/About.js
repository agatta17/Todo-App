import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    fetchReposFailure: false,
    repoList: [],
    fetchUserFailure: false,
    userInfo: {}
  }
  componentDidMount() {
    octokit.repos.listForUser({
      username: 'agatta17'
    }).then(
      successResponse => {
        this.setState({
          repoList: successResponse.data,
          fetchReposFailure: false,
          isLoading: false
        })    
      }).catch(error => {
        this.setState({
          fetchReposFailure: true,
          isLoading: false
        })
      });

    octokit.users.getByUsername({
      username: 'agatta17'
    }).then(
      successResponse => {
        this.setState({
          userInfo: successResponse.data,
          isLoading: false,
          fetchUserFailure: false,
        });
      }).catch(error => {
        this.setState({
          fetchUserFailure: true,
          isLoading: false
        })
      });
  };

  render() {
    const {isLoading, fetchReposFailure, repoList, fetchUserFailure, userInfo} = this.state;
    return (
      <>
        {isLoading ? <CircularProgress color="secondary" className={styles.progress}/> : <h1 className={styles.title}>Обо мне</h1>}

        {!isLoading && !fetchUserFailure && <div>
          <img src={userInfo.avatar_url} className={styles.avatar}/>
          <p>{userInfo.name}</p>
          <p>{userInfo.bio}</p>
          <p><a href={userInfo.html_url} target='blank'>Аккаунт на GitHub</a></p>
        </div>}

        {fetchUserFailure && <div className={styles.error}>Ошибка запроса: данные о пользователе не найдены!</div>}

        <p>Список репозиториев:</p>
        {!isLoading && !fetchReposFailure && <ul>
            {repoList.map(repo => (<li key={repo.id}>
                <a href={repo.html_url} target='blank'>{repo.name}</a>
            </li>))}
          </ul>}

        {fetchReposFailure && <div className={styles.error}>Ошибка запроса: репозитории пользователя не найдены!</div>}

      </>
    );
  }
}

export default About;