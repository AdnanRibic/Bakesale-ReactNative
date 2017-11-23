//import liraries
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PropTypes } from 'prop-types';
import DealItem from './DealItem';

// create a component
class DealList extends React.Component {
    static propTypes = {
        deals: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired,
    };
    render() {
        return (
            <View style={styles.list}>
            <FlatList 
                data={this.props.deals}
                renderItem={({item}) => <DealItem deal={item} onPress={this.props.onItemPress} />}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    list: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        paddingTop: 50,
    },
});

//make this component available to the app
export default DealList;
