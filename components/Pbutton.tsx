import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Pbutton({ title,onPress }: { title: string,onPress:any }){
  return (
    
     <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={onPress}>
     <Text style={styles.text}>{title}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
       width:150,
        backgroundColor:"purple",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
        

    },
    text:{
    color:"white",
    fontWeight:"700"
}})