import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    label: 'Добавить задание',
    id: 'standard-basic',
    error: false

  };

  onButtonClick = () => {
    let error = false;
    this.setState({
      inputValue: ''
    });
    if (this.state.inputValue == '') {
      this.setState({
        error: true,
        id: 'standard-error-helper-text',
        label: 'Введите задание!',
      });
    } else if (this.props.items.filter(item => item.value == this.state.inputValue).length !== 0) {        
        this.setState({
          error: true,
          id: 'standard-error-helper-text',
          label: 'Задание уже существует!',
        });
        console.log(this.props.items.filter(item => item.value == this.state.inputValue));
      } else {
          this.props.onClickAdd(this.state.inputValue);
          this.setState({
            error: false,
            id: 'standard-basic',
            label: 'Добавить задание',
          });
        }
  }
  
  render() {
    return (
      <div className={styles.wrap}>
        <TextField 
          error={this.state.error}
          label={this.state.label} 
          id={this.state.id}
          value={this.state.inputValue}
          onChange={event => {
            this.setState({inputValue: event.target.value.toUpperCase()})
          }}
        />
        <Button 
          variant='outlined' 
          color='primary' 
          size='small' 
          onClick={this.onButtonClick}
        >
          Добавить
        </Button>
      </div>
      );
  }
}

InputItem.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
};

export default InputItem;