import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default function Home() {

    const cards = [
        { img: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png', description: 'Liked Songs' },
        { img: 'https://i.scdn.co/image/ab67706c0000da845f2575c6513aa8e264879e7d', description: 'Essa Gelada Eu vou beber' },
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Slow Down (feat. Jhon)' },
        { img: 'https://i.pinimg.com/474x/18/a3/b2/18a3b25cf87f439a5c0bc0fa7ae0ca54.jpg', description: 'Marilia Mendonça' },
        { img: 'https://i.scdn.co/image/ab67616d0000b273d77d08d4bb06171ce0fe2a0e', description: 'Jorge & Mateus' },
        { img: 'https://i.scdn.co/image/ab67616d0000b2738ddd20bf644f1d50adafad7b', description: 'All Around The World' },
    ]

    const recentlys = [
        { img: 'https://i.scdn.co/image/ab67616d0000b2738ddd20bf644f1d50adafad7b', description: 'All Around The World' },
        { img: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png', description: 'Liked Songs' },
        { img: 'https://i.scdn.co/image/ab67706c0000da845f2575c6513aa8e264879e7d', description: 'Essa Gelada Eu vou beber' },
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Slow Down (feat. Jhon)' },
        { img: 'https://i.pinimg.com/474x/18/a3/b2/18a3b25cf87f439a5c0bc0fa7ae0ca54.jpg', description: 'Marilia Mendonça' },
        { img: 'https://i.scdn.co/image/ab67616d0000b273d77d08d4bb06171ce0fe2a0e', description: 'Jorge & Mateus' },
    ]

    const playlists = [
        { img: 'https://i.scdn.co/image/ab67616d0000b2738ddd20bf644f1d50adafad7b', description: 'All Around The World' },
        { img: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png', description: 'Liked Songs' },
        { img: 'https://i.scdn.co/image/ab67706c0000da845f2575c6513aa8e264879e7d', description: 'Essa Gelada Eu vou beber' },
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Slow Down (feat. Jhon)' },
        { img: 'https://i.pinimg.com/474x/18/a3/b2/18a3b25cf87f439a5c0bc0fa7ae0ca54.jpg', description: 'Marilia Mendonça' },
        { img: 'https://i.scdn.co/image/ab67616d0000b273d77d08d4bb06171ce0fe2a0e', description: 'Jorge & Mateus' },
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#321A5B', '#191414']}
                style={styles.linearGradient}>
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.gear}><MaterialCommunityIcons color="#FFF" name="build" size={26} /></View>
                        <View><Text style={styles.subTitle}>Good evening</Text></View>
                        <View style={styles.cards}>
                            {cards.map((card, key) => (
                                <View key={key} style={styles.card}>
                                    <View style={styles.cardContent}>
                                        <Image resizeMethod="resize" resizeMode="stretch" style={styles.cardContentImage} source={{ uri: card.img }} />
                                        <View style={styles.cardContentDescription}>
                                            <Text style={styles.cardContentDescriptionText}>{card.description}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View><Text style={styles.subTitle}>Recently played</Text></View>
                        <View style={styles.recentlys}>
                            <ScrollView horizontal>
                                {recentlys.map((recently, key) => (
                                    <View key={key} style={styles.recently}>
                                        <View style={styles.recentlyContent}>
                                            <Image resizeMethod="resize" resizeMode="stretch" style={styles.recentlyContentImage} source={{ uri: recently.img }} />
                                            <View style={styles.recentlyContentDescription}>
                                                <Text style={styles.recentlyContentDescriptionText}>{recently.description}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View><Text style={styles.subTitle}>Your playlist</Text></View>
                        <View style={styles.playlists}>
                            <ScrollView horizontal>
                                {playlists.map((playlist, key) => (
                                    <View key={key} style={styles.playlist}>
                                        <View style={styles.playlistContent}>
                                            <Image resizeMethod="resize" resizeMode="stretch" style={styles.playlistContentImage} source={{ uri: playlist.img }} />
                                            <View style={styles.playlistContentDescription}>
                                                <Text style={styles.playlistContentDescriptionText}>{playlist.description}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
