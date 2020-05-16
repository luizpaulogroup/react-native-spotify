import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

import { cards } from '../../Data/Search';

export default function Search() {

    const [textInput, setTextInput] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#321A5B', '#191414']}
                style={styles.linearGradient}>
                <View style={styles.content}>
                    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={styles.title}>Search</Text>
                            <TextInput
                                placeholder="Artists, songs, or podcasts"
                                placeholderTextColor="#222"
                                value={textInput}
                                onChangeText={setTextInput}
                                style={styles.TextInput} />
                        </View>
                        <View><Text style={styles.subTitle}>Your top genres</Text></View>
                        <View style={styles.cards}>
                            {cards.genres.map((card, key) => (
                                <View key={key} style={styles.card}>
                                    <View style={{ ...styles.cardContent, backgroundColor: card.backgroundColor }}>
                                        <Text style={styles.cardTitle}>{card.title}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View><Text style={styles.subTitle}>Browse all</Text></View>
                        <View style={styles.cards}>
                            {cards.all.map((card, key) => (
                                <View key={key} style={styles.card}>
                                    <View style={{ ...styles.cardContent, backgroundColor: card.backgroundColor }}>
                                        <Text style={styles.cardTitle}>{card.title}</Text>
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
