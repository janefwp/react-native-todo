import React ,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'

export default function AddTodo({submitHandler}) {
    
    const[text,setText]=useState('')

    const changeHandle=(val)=>{
        setText(val)
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                multiline
                placeholder='new todo'
                onChangeText={changeHandle}
            />
            <Button onPress={()=>submitHandler(text)} title='Add Todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
    }, 
    
})
