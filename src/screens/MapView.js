

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import MapView from 'react-native-maps';
// import Location from './components/geolocation.js';
import { requestPermission } from 'react-native-android-permissions';
import currentMarker from '/Users/rakesha/garage_project_ui/assets/current_location.png';



export default class MapViewEx extends Component{

    state = {
        mapRegion: null,
        latitude: null,
        longitude: null,
      markers: [
      {
        price: 10,
        rating: 3.4,
        title: 'l0',
        const: -0.02,
        coordinates: {
          latitude: 0.001,
          longitude: 0.005
        },
      },
      {
        price: 25,
        rating: 4.4,
        title: 'l1',
        const: 0.04,
        coordinates: {
          latitude: 0.003,
          longitude: 0.007
        },  
      },
       {
        price: 10,
        rating: 4.9,
        title: 'l2',
        const: 0.05,
        coordinates: {
          latitude: 0.001,
          longitude: 0.002
        },  
      },
       {
        price: 40,
        rating: 2.4,
        title: 'l3',
        const: -0.04,
        coordinates: {
          latitude: -0.009,
          longitude: 0.01
        },  
      },
       {
        price: 40,
        rating: 2.4,
        title: 'l4',
        const: -0.06,
        coordinates: {
          latitude: -0.005,
          longitude: -0.005
        },  
      }]
    }

    componentDidMount() {
        var that = this;
        setTimeout(() => {
            requestPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
                var options = {
                    enableHighAccuracy: false,
                    timeout: 5000
                };

                function success(pos) {
                    var crd = pos.coords;
                    let region = {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                        latitudeDelta: 0.00922 * 1.5,
                        longitudeDelta: 0.00421 * 1.5
                    }
                    that.setState({ mapRegion: region, latitude: pos.coords.latitude, longitude: pos.coords.longitude });
                    console.log('Your current position is:');
                    console.log(`Latitude : ${crd.latitude}`);
                    console.log(`Longitude: ${crd.longitude}`);
                    console.log(`More or less ${crd.accuracy} meters.`);
                }

                function error(err) {
                    console.warn(`ERROR(${err.code}): ${err.message}`);
                }

                navigator.geolocation.getCurrentPosition(success, error, options);
            }, (result) => {
                console.log("Not Granted!");
                console.log(result);
            });
        }, 0);
    }

    // componentWillUnmount() {
    //     navigator.geolocation.clearWatch(this.watchID);
    // }

    // onRegionChange(region, lastLat, lastLong) {
    //     this.setState({
    //         mapRegion: region,
    //         // If there are no new values set the current ones
    //         lastLat: lastLat || this.state.lastLat,
    //         lastLong: lastLong || this.state.lastLong
    //     });
    // }

    render() {
        const { region } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -6.270565,
                        longitude: 106.759550,
                        latitudeDelta: 1,
                        longitudeDelta: 1
                    }}
                    region={this.state.mapRegion} >

                    <MapView.Marker
                        image={currentMarker}
                        coordinate={{
                            latitude: (this.state.latitude + 0.00050) || -36.82339,
                            longitude: (this.state.longitude + 0.00050) || -73.03569,
                        }}
                        >
                    </MapView.Marker>

                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            coordinate={{
                                latitude: (this.state.latitude + marker.coordinates.latitude + 0.00050) || -36.82339,
                                longitude: (this.state.longitude + marker.coordinates.longitude + 0.00050) || -73.03569,
                            }} >  
                            <MapView.Callout>
                                <Text style={{fontWeight: 'bold'}}>Price: Rs.{marker.price}</Text>
                                <Text style={{fontWeight: 'bold'}}>Rating: {marker.rating}</Text>
                            </MapView.Callout>
                        </MapView.Marker>
                    ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding:5,
    },
});
