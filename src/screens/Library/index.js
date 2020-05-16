import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export default function Library() {

    const [textInput, setTextInput] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#321A5B', '#191414']}
                style={styles.linearGradient}>
                <View style={styles.content}>
                    <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
                        <View><Text style={styles.title}>Music</Text></View>
                        <View style={styles.contentFilter}>
                            <TextInput
                                placeholder="Artists, songs, or podcasts"
                                placeholderTextColor="#F5F5F5"
                                value={textInput}
                                onChangeText={setTextInput}
                                style={styles.TextInput} />
                            <TouchableOpacity style={styles.buttonFilters}>
                                <Text style={styles.buttonFiltersText}>Filters</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View><Text style={styles.subTitle}>Your top genres</Text></View> */}
                        <TouchableOpacity style={styles.create}>
                            <View style={styles.createIcon}>
                                <MaterialCommunityIcons color="#FFF" name="add" size={26} />
                            </View>
                            <Text style={styles.createText}>Create playlist</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
