import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableNativeFeedback
} from 'react-native';
import NormalCell from './template/NormalCell'
import SectionView from './template/SectionView'
import data  from './DataLoader';

class ServicePage extends Component {


    constructor() {
        super();
        this.state = {
            collapse: false
        };
    }

    render() {

        const category = data(1);
        const data0 = category[1];
        var {width} = Dimensions.get('window');

        return (
            <View>
                <SectionView divider={true} value={data0.title}/>
                <View style={styles.container}>
                    {
                        data0.items.map(item => {
                            return <NormalCell
                                childWidth={width}
                                item={item}
                                key={item.item_id}/>
                        })
                    }
                </View>
                {this.renderCollapse(data0.items)}
            </View>
        );
    }

    renderCollapse(items) {

        const enable = items && items.length > 8;
        if (enable) {
            const transform = this.state.collapse ? [{rotateX: '0deg'}] : [{rotateX: '180deg'}];
            return (
                <TouchableNativeFeedback
                    onPress={this.onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.collapse}>
                        <View style={[styles.alow, {transform: transform}]}/>
                    </View>
                </TouchableNativeFeedback>
            );
        }
    }

    onPressButton() {
        this.setState({
            collapse : !this.state.collapse
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    collapse: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },
    alow:{
        width:0,
        height:0,
        borderLeftWidth:5,
        borderRightWidth:5,
        borderTopWidth:5,
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
        borderTopColor:'#cccccc'
    }
});

export default ServicePage;