import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    linearGradient: {
        flex: 1,
    },
    greeting: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFF'
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    card: {
        width: '50%',
        height: 75,
        padding: 5,
        borderRadius: 12,
    },
    cardContent: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: '#444',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cardContentImage: {
        width: '40%',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    cardContentDescription: {
        width: '60%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContentDescriptionText: {
        overflow: 'hidden',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
});

export default styles;