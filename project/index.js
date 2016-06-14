
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import ServicePage from './ServicePage';

class Application extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ServicePage/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});

export default Application;