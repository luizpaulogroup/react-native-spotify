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
        marginBottom: 10,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        marginTop: 10,
        marginBottom: 10,
    },
    // SEARCH
    contentFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    TextInput: {
        width: '70%',
        height: 42,
        backgroundColor: '#333',
        borderRadius: 5,
        padding: 10,
        color: '#F5F5F5',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonFilters: {
        width: '25%',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#333',
    },
    buttonFiltersText: {
        color: '#F5F5F5',
        fontWeight: 'bold',
    },
    create: {
        marginTop: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    createIcon: {
        width: 70,
        height: 70,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
    },
    createText: {
        marginLeft: 10,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    },
});

export default styles;