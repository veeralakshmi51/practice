import {Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
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
  const image2 = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), 
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const image3 = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), 
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const image4= {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), 
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

return(
  <SafeAreaView style={styles.container}>
  <ScrollView>
    <Card {...image1}/>
    <Card {...image2}/>
    <Card {...image3}/>
    <Card {...image4}/>
  </ScrollView>
  </SafeAreaView>
  
)
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5',//white smoke color
    paddingTop:Platform.OS==='android'? '15%':0
  }
})
export default App;