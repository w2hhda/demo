import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Image
} from 'react-native';

import image from '../ImageLoader';

class NormalCell extends Component {

    constructor() {
        super();
    }

    render() {

        const item = this.props.item;
        const width = this.props.childWidth;
        const container = [styles.container, {width: width / 4}];
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={container}>
                    <Image
                        style={styles.icon}
                        source={image(item)}
                    />
                    <Text style={styles.text} numberOfLines={4}>
                        {item.title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        marginTop: 5,
        height: 46,
        width: 46,
    },
    text: {
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5
    },
});

export default NormalCell;