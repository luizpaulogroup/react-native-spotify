import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    ScrollView: {
        paddingHorizontal: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
        marginTop: 10,
        marginBottom: 10
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        marginTop: 10,
        marginBottom: 10,
    },
    // SEARCH
    TextInput: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 15,
        color: '#222',
        fontWeight: 'bold',
        fontSize: 18
    },
    // CARDS
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    card: {
        width: '48%',
        marginVertical: 7,
        height: 100,
    },
    cardContent: {
        flex: 1,
        borderRadius: 12,
        padding: 10
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#FFF'
    }
});

export default styles;