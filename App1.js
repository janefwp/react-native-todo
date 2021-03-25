import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert,TouchableOpacity, FlatList, Button, StyleSheet, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import SandBox from './components/sandBox';

export default function App() {
  const [name, setName]=useState('shaun')
  const [age, setAge] = useState('30')
  const [people,setPeople]=useState([
    {name:'shaun', id:'1'},
    {name:'yoshi', id:'2'},
    {name:'luigi', id:'3'},
    {name:'peach', id:'4'},
    {name:'mario', id:'5'},
    {name:'pearl', id:'6'},
    {name:'sherry', id:'7'},
    {name:'apple', id:'8'},
    {name:'toad', id:'9'},
    {name:'browser', id:'10'},
  ])
  const clickHandler=() =>{
    setName('chun-li')
    setPerson({
      name: 'luigi',
      age:45
    })
  }
  // const pressHandler=(id)=>{
  //   setPeople((prevPeople)=>{
  //     return prevPeople.filter(person=>person.id!=id)
  //   })
  // }
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ])
  
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }
  const submitHandler=(text)=>{
    if(text.length>3){
      setTodos((prevTodos)=>{
        return [
          {text:text, key: Math.random().toString()},
          ...prevTodos,
  
        ]
      })
    } else {
      Alert.alert('OOPS!','Todos must be over 3 chars long',[{text:'Understand'}])
    }
  }
  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={
      Keyboard.dismiss()
    }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
        {/**Form */}
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
    

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding:40,

    flex:1,
    
  },
  list:{
    marginTop:20,
   
  },

  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:10,
    marginTop:24,
  },
  input: {
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
  buttonContainer: {
    marginTop:20
  },
  header: {
    backgroundColor:'pink',
    padding:20,
  },
  boldText: {
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  }
});
