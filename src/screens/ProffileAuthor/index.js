import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import AnimatedHeader from '../../Components/HeaderAnimated';

import styles from './styles';

import { musics } from '../../Data/ProfileAuthor';

export default function ProfileAuthor({ navigation, route }) {

    const { author } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#321A5B', '#191414']}
                style={styles.linearGradient}>
                <View style={styles.content}>
                    <AnimatedHeader
                        style={{ flex: 1, alignSelf: 'stretch', zIndex: 999 }}
                        title={author.author}
                        renderLeft={() => (
                            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                                <MaterialCommunityIcons style={styles.arrowBack} name="arrow-back" color="#FFF" size={28} />
                            </TouchableOpacity>
                        )}
                        titleStyle={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            left: 10,
                            color: '#FFF'
                        }}
                        headerMaxHeight={350}
                        parallax={true}
                        imageSource={author.img}
                        toolbarColor='#321A5B'
                        disabled={false}
                    >
                        <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                            <View style={styles.contentAuthor}>
                                <View style={styles.information}>
                                    <View style={styles.followers}>
                                        <Image style={styles.logoSpotify} source={{ uri: 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png' }} />
                                        <Text style={styles.textSpotify}>Spotify</Text>
                                    </View>
                                    <Text style={styles.numberFollwers}>718.712 likes * 2h 28m</Text>
                                    <View style={styles.actions}>
                                        <TouchableOpacity style={{ ...styles.buttonAction, marginRight: 10 }}>
                                            <MaterialCommunityIcons name="favorite" color="#1DB954" size={28} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ ...styles.buttonAction, marginHorizontal: 10 }}>
                                            <MaterialCommunityIcons style={{ opacity: 0.6 }} name="cloud-download" color="#FFF" size={28} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ ...styles.buttonAction, marginHorizontal: 10 }}>
                                            <MaterialCommunityIcons style={{ opacity: 0.6 }} name="more-horiz" color="#FFF" size={28} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ ...styles.buttonAction, right: 0, position: 'absolute' }}>
                                            <MaterialCommunityIcons name="play-circle-filled" color="#1DB954" size={70} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.musics}>
                                    {musics.map((music, key) => (
                                        <TouchableOpacity key={key} style={styles.music}>
                                            <View style={styles.musicImg}>
                                                <Image style={styles.musicImgRender} source={{ uri: music.img }} />
                                            </View>
                                            <View style={styles.musicInf}>
                                                <Text style={styles.musicInfName}>{music.name}</Text>
                                                <Text style={styles.musicInfAuthors}>{music.authors}</Text>
                                            </View>
                                            <View style={styles.musicAction}>
                                                <TouchableOpacity style={styles.musicButtonAction}>
                                                    <MaterialCommunityIcons name="more-horiz" color="#FFF" size={28} />
                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </ScrollView>
                    </AnimatedHeader>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )

}