import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ListItemToevoegen from '../components/ListItemToevoegen';
import ListItem from '../components/ListItem';
import { getLocations, removeLocations } from '../utils/AsyncStorageHandler';

class WeatherOverview extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Overview',
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center', flex: 1 },
    headerRight: (
      <TouchableOpacity onPress={navigation.getParam('reset')} style={{ marginRight: 10 }}>
        <Text style={{ color: '#000' }}>Reset</Text>
      </TouchableOpacity>
    ),
    headerLeft: <View />
  });

  constructor(props) {
    super(props);
    this.defaultLocations = [{ id: -1 }, { id: -1 }, { id: -1 }, { id: -1 }, { id: -1 }];
    this.state = {
      locations: this.defaultLocations
    };
  }

  componentDidMount() {
    this.update();
    this.props.navigation.setParams({ reset: this.reset });
  }

  reset = () => {
    removeLocations().then(this.setState({ locations: this.defaultLocations }));
  };

  update = () => {
    getLocations().then(l => {
      if (l) {
        while (l.length < 5) {
          l.push({
            id: -1
          });
        }
        this.setState({ locations: l });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.locations.map((location, index) => {
          if (location.id === -1) {
            return (
              <ListItemToevoegen
                key={index}
                navigation={this.props.navigation}
                update={this.update}
              />
            );
          }
          return <ListItem key={index} location={location} navigation={this.props.navigation} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default WeatherOverview;
