import React,{useState, useEffect} from 'react'
import * as Font from 'expo-font'
import Home from './screens/home'
import { AppLoading } from 'expo-app-loading'
import HomeStack from './routes/homeStack'
import RootDrawer from './routes/drawer'



export default function App() {
    const [fontLoaded, setFontLoaded]=useState(false)

    const getFonts =()=>{
        return Font.loadAsync({
            'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
            'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
        })
    }

    useEffect(()=>{
        getFonts()
        setFontLoaded(true)
    },[fontLoaded])

    return (
        <RootDrawer />
    )

}

