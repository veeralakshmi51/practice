import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [value,setValue]=useState("");
  const [courses,setCourses]=useState([]);
  function add(text){
    setValue(text)
    
  }
  function click(){
    setCourses((currentCourses)=>[...currentCourses,value])
  }
  return (
    <View style={styles.list}>
      <View style={styles.input}>
     <TextInput placeholder='Type here...' style={styles.textInput} onChangeText={add}></TextInput>
     <Button title='Add Course' onPress={click}></Button>
     </View>
     <View style={styles.lists}>
      {courses.map((course,i)=>
        <Text key={i}>{course}</Text>
      )}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
  },
  input:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    paddingBottom:24,
    flex:1,
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:8,
    padding:8,
  },
  lists:{
    flex:4
  }
});
