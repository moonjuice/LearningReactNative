import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
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
        <TextInput style={styles.input} onSubmitEditing={this.handleTextChange.bind(this)}/>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
});

export default WeatherProject;