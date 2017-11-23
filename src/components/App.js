//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from '../ajax';
import DealList from './DealList'

// create a component
class App extends React.Component {
    state = {
        deals: [],
    };
    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();
        this.setState(prevState => {
            return { deals };
        });
    }
    render() {
        return (
            <View style={styles.container}>
            { this.state.deals.length > 0 ? (
                 <DealList deals={this.state.deals} />
            ) : ( 
                <Text style={styles.header}>Loading...</Text>
            )}  
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    header: {
        fontSize: 40,
    },
});

//make this component available to the app
export default App;
