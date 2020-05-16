import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default function Home() {

    const cards = [
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Liked Songs' },
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Essa Gelada Eu vou beber' },
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Slow Down (feat. Jhon)' },
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Marilia Mendonça' },
        { img: 'https://i.scdn.co/image/ab67706c0000da845f2575c6513aa8e264879e7d', description: 'Jorge & Mateus' },
        { img: 'https://vintageculture.com/wp-content/uploads/2020/04/Slow-Down-VC-e-Slow-Motion-Remix.jpg', description: 'Tribal Trap' },
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#321A5B', '#191414']}
                style={styles.linearGradient}>
                <View style={styles.content}>
                    <ScrollView>
                        <View><Text style={styles.greeting}>Good evening</Text></View>
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
                    </ScrollView>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
