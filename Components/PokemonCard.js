import {View,Text,StyleSheet, Platform,Image} from 'react-native'
 
const Card=({name,image,type,hp,moves,weaknesses})=>{
    return (
<View style={styles.card}>
    <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
    </View>
    <Image source={image} accessibilityLabel={`${name} pokemon`} style={styles.image} resizeMode='contain'/>
    <View style={styles.typecontainer}>
        <Text style={styles.type}>{type}</Text>
    </View>
    <View style={styles.moveContainer}>
        <Text style={styles.move}>Moves : {moves.join(", ")}</Text>
    </View>
    <View style={styles.weakcontainer}>
        <Text style={styles.weak}>Weaknesses : {weaknesses.join(", ")}</Text>
    </View>
</View>
    )
}
const styles=StyleSheet.create({
   card:{
     backgroundColor:'lightblue',
     borderRadius:15,
     borderWidth:2,
     padding:16,
     margin:16,
     ...Platform.select({
        ios:{
            shadowOffset:{
                width:2,
                height:2
            },shadowColor:'#333',
            shadowOpacity:0.5,
            shadowRadius:4
        },
        android:{
            elevation:10,
        }
     })
   },
   nameContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:30
   },
   name:{
    fontSize:30,
    fontWeight:'bold'
   },
   hp:{
    fontSize:22,
   },
   image:{
    width:'100%',
    height:200
   }

})
export default Card