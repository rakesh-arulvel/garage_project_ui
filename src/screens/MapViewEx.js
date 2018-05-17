

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';
// import Location from './components/geolocation.js';
import { requestPermission } from 'react-native-android-permissions';
//import currentLocator from './assets/current_location.png'



export default class MapViewEx extends Component{

    state = {
        mapRegion: null,
        lastLat: null,
        lastLong: null,
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
                <SearchBar style={styles.searchBar}
  placeholder='Destination Here...' />
                { <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -6.270565,
                        longitude: 106.759550,
                        latitudeDelta: 1,
                        longitudeDelta: 1
                    }}
                    region={this.state.mapRegion} >

                    <MapView.Marker
                        coordinate={{
                            latitude: (this.state.latitude + 0.00050) || -36.82339,
                            longitude: (this.state.longitude + 0.00050) || -73.03569,
                        }}
                        >
                    </MapView.Marker>
                </MapView>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        // ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 60,
        bottom: 0,
    },
    searchBar:{
        zIndex: 50,
        position: 'absolute',
        top: 0
    }
});
