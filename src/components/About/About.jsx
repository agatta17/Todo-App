import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import Pagination from '@material-ui/lab/Pagination';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    fetchReposFailure: false,
    repoList: [],
    fetchUserFailure: false,
    userInfo: {},
    currentPage: 1,
    perPage: 3
  }

  componentDidMount() {
    this.requestRepolist(this.state.perPage, this.state.currentPage);

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
        });
      });
  };

  requestRepolist = (perPage, selectedPage) => {
    octokit.repos.listForUser({
      username: 'agatta17',
      per_page: perPage,
      page: selectedPage
    }).then(
      successResponse => {
        this.setState({
          repoList: successResponse.data,
          fetchReposFailure: false,
          isLoading: false,
          currentPage: selectedPage
        }); 
      }).catch(error => {
        this.setState({
          fetchReposFailure: true,
          isLoading: false,
          currentPage: selectedPage
        });
    });
  }

  render() {
    const {isLoading, fetchReposFailure, repoList, fetchUserFailure, userInfo, currentPage, perPage} = this.state;
    const switchPage = (event, page) => {
      this.requestRepolist(perPage, page);
    };

    return (
      <>
        {isLoading ? <CircularProgress color="secondary" className={styles.progress}/> : <h1 className={styles.title}>Обо мне</h1>}
        
        {fetchUserFailure && <div className={styles.error}>Ошибка запроса: данные о пользователе не найдены!</div>}

        {!isLoading && !fetchUserFailure && 
          <><div className={styles.info}>
            <img src={userInfo.avatar_url} className={styles.avatar}/>
            <div className={styles.text}>
              <p className={styles.name}>{userInfo.name}</p>
              <p className={styles.bio}>{userInfo.bio}</p>
              <p className={styles.githuburl}><a href={userInfo.html_url} target='blank'>Аккаунт на GitHub</a></p>
            </div>            
          </div>
          <div className={styles.works}>
            <p>Примеры работ:</p>
            <ul>
              <li><a href="https://agatta17.github.io/tesla/" target='blank'>Верстка лендинга</a> - пример адаптивной верстки одностраничного сайта</li>
              <li><a href="https://agatta17.github.io/find-a-bug/" target='blank'>Игра "Найди баг"</a> - карточная игра на javascript для проверки интуиции</li>
            </ul>
          </div></>}

        
        {!isLoading && !fetchReposFailure && <><p className={styles.repolisttitle}>Список репозиториев:</p>
          <div className={styles.repolist}>
            <ul>
              {repoList.map(repo => (<li key={repo.id}>
                  <a href={repo.html_url} target='blank'>{repo.name}</a>  
                  <span> &#8226; {repo.description}</span>
                  <span> &#8226; {repo.language}</span>
              </li>))}
            </ul>
          </div>
          <Pagination onChange={switchPage} page={currentPage} className={styles.pagination} count={Math.ceil(userInfo.public_repos/perPage)} shape="rounded" color="secondary" /></>}

        {fetchReposFailure && <div className={styles.error}>Ошибка запроса: репозитории пользователя не найдены!</div>}

      </>
    );
  }
}

export default About;