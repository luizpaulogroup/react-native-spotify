import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        // paddingVertical: 15,
        paddingHorizontal: 15
    },
    linearGradient: {
        flex: 1,
    },
    gear: {
        marginTop: 10,
        alignItems: 'flex-end'
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
        marginBottom: 10
    },
    // CARDS
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
        width: '35%',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    cardContentDescription: {
        width: '65%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContentDescriptionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    // RECENTLYS
    recentlys: {
        flexDirection: 'row',
    },
    recently: {
        width: 125,
        height: 200,
        padding: 5,
    },
    recentlyContent: {
        flex: 1,
    },
    recentlyContentImage: {
        width: '100%',
        height: 110,
    },
    recentlyContentDescription: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    recentlyContentDescriptionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    // PLAYLISTS
    playlists: {
        flexDirection: 'row',
    },
    playlist: {
        width: 185,
        // height: 300,
        padding: 5,
    },
    playlistContent: {
        flex: 1,
    },
    playlistContentImage: {
        width: '100%',
        height: 170,
    },
    playlistContentDescription: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    playlistContentDescriptionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    // ARTISTS
    artists: {
        flexDirection: 'row',
    },
    artist: {
        width: 170,
        height: 200,
        padding: 5,
    },
    artistContent: {
        flex: 1,
    },
    artistContentImage: {
        width: '100%',
        height: 160,
        borderRadius: 100,
    },
    artistContentDescription: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    artistContentDescriptionText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
});

export default styles;