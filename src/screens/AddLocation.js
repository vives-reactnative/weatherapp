import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TextInput
} from 'react-native';
import axios from 'axios';
import { saveLocations, getLocations } from '../utils/AsyncStorageHandler';

class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      errorMessage: null
    };
  }

  onSearchPressed() {
    if (this.state.searchString === '') return;

    axios
      .get(
        `https://weatherappbackend.herokuapp.com/weatherapi?city=${this.state.searchString}`
      )
      .then(json => {
        this.handleResponse(json);
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.setState({ errorMessage: 'Ongeldig opgeven EU hoofdstad' });
        } else {
          this.setState({ errorMessage: 'Fout bij opvragen weerinfo' });
        }
      });
  }

  handleResponse(json) {
    if (json.status === 200) {
      getLocations().then(l => {
        if (l) {
          saveLocations([...l, json.data]).then(() => {
            this.props.navigation.state.params.update();
            this.props.navigation.navigate('Overview');
          });
        } else {
          saveLocations([json.data]).then(() => {
            this.props.navigation.state.params.update();
            this.props.navigation.navigate('Overview');
          });
        }
      });
    }
  }

  render() {
    const { container, title } = styles;

    return (
      <ImageBackground
        // eslint-disable-next-line global-require
        source={require('../../assets/addbackground.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={container}>
          <Text style={title}>Voeg een locatie toe</Text>
          <TextInput
            onChangeText={text => this.setState({ searchString: text })}
            autoCorrect={false}
            placeholder="Zoek een EU hoofdstad op"
            placeholderTextColor="white"
            style={styles.textInput}
            value={this.state.searchString}
            clearButtonMode="always"
          />
          <Button
            onPress={this.onSearchPressed.bind(this)}
            title="Go!"
            color="#643E53"
          />
          {this.state.errorMessage && (
            <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
          )}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 175,
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#643E53'
  },
  textInput: {
    backgroundColor: '#60585D',
    color: 'white',
    height: 40,
    width: 300,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 5
  }
});

export default AddLocation;
