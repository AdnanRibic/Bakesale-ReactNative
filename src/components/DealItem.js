//import liraries
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { priceDisplay } from '../util';

// create a component
class MyClass extends React.Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }
    handlePress = () => {
        this.props.onPress(this.props.deal.key);
    }
    render() {
        const { deal } = this.props;
        return (
            <TouchableOpacity style={styles.deal}
                onPress={this.handlePress}
            >
                <Image source={{ uri: deal.media[0] }} 
                style={styles.image}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View  style={styles.footer}>
                        <Text style={styles.cause}>{priceDisplay(deal.price)}</Text>
                        <Text style={styles.price}>{deal.cause.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        marginTop: 20,
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
export default MyClass;
