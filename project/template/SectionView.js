import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class SectionView extends Component {

    render() {

        const value = this.props.value;
        const divider = this.props.divider;
        const container = [styles.container, divider && styles.divider];

        return (
            <View style={container}>
                <View style={styles.icon}/>
                <Text style={styles.text}>{value}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        height: 30,
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
        height: 15,
        width: 2,
        backgroundColor: '#65bd6a'
    },
    text: {
        textAlign: 'center',
        marginLeft: 5
    },
    divider: {
        borderBottomColor: '#ddd',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});


export default SectionView;