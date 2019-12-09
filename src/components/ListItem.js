import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { weerCondities } from '../config/weerCondities';
import Icon from './Icon';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.weersConditie = weerCondities.find(
      c => c.code === this.props.location.code
    );
  }

  goToDetails = () => {
    this.props.navigation.navigate('Detail', { location: this.props.location });
  };

  render() {
    return (
      <TouchableHighlight
        style={[
          styles.container,
          { backgroundColor: this.weersConditie.color }
        ]}
        onPress={this.goToDetails}
      >
        <View style={styles.flowHorizontal}>
          <View style={styles.leftContainer}>
            <Icon code={this.props.location.code} />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.text}>{this.props.location.name}</Text>
            <Text style={styles.subtext}>
              {this.props.location.degreesCelcius}°C
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  text: {
    color: 'white',
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 5
  },
  subtext: {
    color: 'white'
  },
  image: {
    height: 30
  },
  flowHorizontal: {
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1
  },
  rightContainer: {
    flex: 3,
    flexDirection: 'column'
  }
});

export default ListItem;
