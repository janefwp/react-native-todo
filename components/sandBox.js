import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxone}>One</Text>
            <Text style={styles.boxtwo}>Two</Text>
            <Text style={styles.boxthree}>Three</Text>
            <Text style={styles.boxfour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'flex-start',
        padding: 40,
        backgroundColor:'#ddd',
        
    },
    boxone:{
        flex:2,
        padding:10,
        backgroundColor:'violet',
    },
    boxtwo:{
        flex:1,
        padding:20,
        backgroundColor:'gold',
    },
    boxthree:{
        flex:1,
        padding:30,
        backgroundColor:'coral',
    },
    boxfour:{
        flex:1,
        padding:40,
        backgroundColor:'skyblue'
    },
})
