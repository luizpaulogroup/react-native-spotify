import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import { artists, cards, recentlys, playlists } from '../../Data/Home';

import randomize from '../../functions/randomize';

export default function Home() {

    const [tmpArtists] = useState(randomize(artists));
    const [tmpCards] = useState(cards);
    const [tmpRecentlys] = useState(randomize(recentlys));
    const [tmpPlaylists] = useState(randomize(playlists));

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#321A5B', '#191414']}
                style={styles.linearGradient}>
                <View style={styles.content}>
                    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                        <View style={styles.gear}><MaterialCommunityIcons color="#FFF" name="build" size={26} /></View>
                        <View><Text style={styles.subTitle}>Good evening</Text></View>
                        <View style={styles.cards}>
                            {tmpCards.map((card, key) => (
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
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {tmpRecentlys.map((recently, key) => (
                                    <View key={key} style={styles.recently}>
                                        <View style={styles.recentlyContent}>
                                            <Image resizeMethod="resize" resizeMode="stretch" style={styles.recentlyContentImage} source={{ uri: recently.img }} />
                                            <View style={styles.recentlyContentDescription}>
                                                <Text style={styles.recentlyContentDescriptionText}>{recently.author}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View><Text style={styles.subTitle}>Your playlist</Text></View>
                        <View style={styles.playlists}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {tmpPlaylists.map((playlist, key) => (
                                    <View key={key} style={styles.playlist}>
                                        <View style={styles.playlistContent}>
                                            <Image resizeMethod="resize" resizeMode="stretch" style={styles.playlistContentImage} source={{ uri: playlist.img }} />
                                            <View style={styles.playlistContentDescription}>
                                                <Text style={styles.playlistContentDescriptionText}>{playlist.author}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View><Text style={styles.subTitle}>Suggested artists</Text></View>
                        <View style={styles.playlists}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                {tmpArtists.map((artist, key) => (
                                    <View key={key} style={styles.artist}>
                                        <View style={styles.artistContent}>
                                            <Image resizeMethod="resize" resizeMode="stretch" style={styles.artistContentImage} source={{ uri: artist.img }} />
                                            <View style={styles.artistContentDescription}>
                                                <Text style={styles.artistContentDescriptionText}>{artist.author}</Text>
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
