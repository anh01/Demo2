import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Note extends Component {
    render() {
        const { children } = this.props;
        return (
            <View>
                <Text>{children}</Text>
            </View>
        );
    }
}
