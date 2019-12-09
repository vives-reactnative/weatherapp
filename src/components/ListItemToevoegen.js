import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

class ListItemToevoegen extends Component {
  toevoegen = () => {
    this.props.navigation.navigate('Add', { update: this.props.update });
  };

  render() {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={this.toevoegen}
        underlayColor="#684056"
      >
        <Text style={styles.text}>Locatie toevoegen</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#503142',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  text: {
    color: 'white',
    fontSize: 25
  }
});

export default ListItemToevoegen;
