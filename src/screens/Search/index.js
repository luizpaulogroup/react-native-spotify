import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default function Search() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#321A5B', '#191414']}
                style={styles.linearGradient}>
                <View style={styles.content}>
                    <Text>Search</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
