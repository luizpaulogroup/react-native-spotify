import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import styles from './styles';

export default function Library() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.content}>
                <Text>Library</Text>
            </View>
        </SafeAreaView>
    )
}
