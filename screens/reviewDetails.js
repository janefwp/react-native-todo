import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ReviewDetails({route,navigation}) {
    const { title, rating, body} = route.params;
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{rating}</Text>
            <Text>{body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24,

    }
})
