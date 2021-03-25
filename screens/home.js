import React,{useState} from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home( {navigation} ) {
    const [reviews, setReviews]=useState([
        {title:'Zelda, Breath of Fresh Air', rating: 5, body:'lorem ipsum',key:'1'},
        {title:'Gotta Catch Them All(again)', rating: 4, body:'lorem ipsum',key:'2'},
        {title:'Not so "Final" Fantasy', rating: 3, body:'lorem ipsum',key:'3'},
    ])
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Review Details',{title: item.title, rating: item.rating, body:item.body})}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to details' onPress={()=>navigation.navigate('Review Details')}/> */}
           
        </View>
    )
}

