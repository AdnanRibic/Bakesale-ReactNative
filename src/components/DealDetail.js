//import liraries
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image , Touchable} from 'react-native';
import { priceDisplay } from '../util';

// create a component
class DealDetail extends React.Component {
    static propTypes = {
        initialDealData: PropTypes.object.isRequired,
    }
    state = {
        deal: this.props.initialDealData,
    }
    render() {
        const { deal } = this.state;
        return (
            <View style={styles.deal}>
                <Image source={{ uri: deal.media[0] }} 
                style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View  style={styles.footer}>
                        <Text style={styles.cause}>{priceDisplay(deal.price)}</Text>
                        <Text style={styles.price}>{deal.cause.name}</Text>
                    </View>
                    <Text> ... </Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
    },
    deal: {
        marginHorizontal: 12,
        marginTop: 50,
    },
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
    },
    price: {
        flex: 1,
        textAlign: 'right',
    },
    cause: {
        flex: 2,
    },
});

//make this component available to the app
export default DealDetail;
