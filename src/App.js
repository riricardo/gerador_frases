import React, {Component} from 'react';
import {StyleSheet, View, Alert, Image} from 'react-native';
const img = require('./img/logo.png');

import BotaoComponent from './components/botaoComponent';
import {BotaoFunction} from './components/botaoFunction';
// Esta eh uma biblioteca que contem elementos personalizados
// que podemos utilizar em nosso codigo
import {Button} from 'react-native-elements';

const handleGerarFrase = () => {
  Alert.alert('Click');
};

var frases = ['oi', 'blz', 'shop', 'lindão', 'mulekote', 'jovem'];

const gerarFraseAleatoria = () => {
  Alert.alert('Frase: ', frases[Math.floor(Math.random() * frases.length)]);
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={estilo.container}>
        <Image source={img} />
        <View style={estilo.botaoContainer}>
          <BotaoComponent
            icone="cached"
            titulo="Gerar Frase"
            color="#31B404"
            handleClick={gerarFraseAleatoria}
          />
          <BotaoComponent
            icone="home"
            titulo="Gerar Frase 2"
            color="#31B404"
            handleClick={handleGerarFrase}
          />
          <BotaoFunction titulo="Gerar Frase 3" onPress={gerarFraseAleatoria} />
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoContainer: {
    marginTop: 20,
  },
});

export default App;
