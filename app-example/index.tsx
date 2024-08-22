import { View, Text } from 'react-native'
import React from 'react'
import Pbutton from '@/components/Pbutton'
import { useRouter } from 'expo-router'

export default function Index() {
    const router=useRouter()
    const Countinue=()=>{
router.navigate('/posts')
    }
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'} }>
     <Pbutton title="Countinue" onPress={Countinue}></Pbutton>
    </View>
  )
}