import { Platform, SafeAreaView, StyleSheet,View } from "react-native";
import Card from "./Components/PokemonCard";
const App =()=>{
  const image1={
    name:'Charmander',
    image:require("./assets/charmander.png"),
    type:"Fire",
    hp:39,
    moves:['Scratch','Ember','Growl','Leer'],
    weaknesses:['Water','Rock'],
  };
return(
  <SafeAreaView style={styles.container}>
    <Card {...image1}/>
  </SafeAreaView>
  
)
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
    paddingTop:Platform.OS==='android'? '15%':0
  }
})
export default App;