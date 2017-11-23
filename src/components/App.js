//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from '../ajax';
import DealList from './DealList'
import DealDetail from './DealDetail'

// create a component
class App extends React.Component {
    state = {
        deals: [],
        currentDealId: null,
    };
    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();
        this.setState(prevState => {
            return { deals };
        });
    }
    setCurrentDeal = (dealId) => {
        this.setState({
            currentDealId: dealId
        });
    };
    currentDeal = () => {
        return this.state.deals.find(
            (deal) => deal.key === this.state.currentDealId
        );
    };
    render() {
        if (this.state.currentDealId) {
            return <DealDetail initialDealData={this.currentDeal()} />
        }
        if (this.state.deals.length > 0) {
            return <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Loading...</Text> 
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
