import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import Forecast from './Forecast';

class WeatherProject extends Component {

  constructor(props) {
      super(props);
      this.state = {
        zip: '',
        forecast: {
          main: 'Clouds',
          description: 'few clouds',
          temp: 45.7
        }
      };
  }

  render() {
    return (
      <View style={styles.container}>
      <Image 
        source={require('../images/flowers.png')}
        resizeMode='cover'
        style={styles.backdrop}>
        <View style={styles.overlay}>
        <TextInput style={styles.input} onSubmitEditing={this.handleTextChange.bind(this)}/>
        <Text>
          You input {this.state.zip}.
        </Text>
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
        </View>
      </Image>
      </View>
    );
  }

  handleTextChange(event) {
    console.log(event.nativeEvent.text);
    this.setState({zip:event.nativeEvent.text});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
    textAlign: 'center'
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default WeatherProject;