import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {PropTypes} from 'prop-types';
// import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BotaoComponent extends Component {
  static propTypes = {
    titulo: PropTypes.string,
    handleClick: PropTypes.func,
    cor: PropTypes.string,
  };
  render() {
    return (
      <Button
        icon={{name: this.props.icone, color: '#5bc023', size: 30}}
        iconRight
        title={this.props.titulo}
        onPress={this.props.handleClick}
        // buttonStyle
        // linearGradientProps={this.props.cor}
      />
    );
  }
}
