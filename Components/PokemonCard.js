import {View,Text,StyleSheet, Platform,Image} from 'react-native'
 const typeDetails=(type)=>{
    switch(type.toLowerCase()){
        case 'electric':
            return{borderColor:'#FFD700',emoji:'⚡'};
        case 'water':
            return{borderColor:'#6493EA',emoji:'💧'};
        case 'fire':
            return{borderColor:'#FF5733',emoji:'🔥'};
        case 'grass':
            return{borderColor:'#66CC66',emoji:'☘️'};
        default:
            return{borderColor:'#A0A0A0', emoji:'❓'}
    }
 };
const Card=({name,image,type,hp,moves,weaknesses})=>{
    const {borderColor,emoji}=typeDetails(type);
    return (
<View style={styles.card}>
    <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
    </View>
    <Image source={image} accessibilityLabel={`${name} pokemon`} style={styles.image} resizeMode='contain'/>
    <View style={styles.typeContainer}>
    <View style={[styles.badge,{borderColor}]}>
    <Text style={styles.typeEmoji}>{emoji}</Text>
    <Text style={styles.type}>{type}</Text>
    </View>
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
     backgroundColor:'white',
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
    marginBottom:20
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
   },
   typeContainer:{
    marginBottom:30,
    alignItems:'center',
    marginTop:10
   },
   badge:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:2,
    paddingHorizontal:10,
    borderRadius:20,
    borderWidth:4,
   },
   typeEmoji:{
    fontSize:30,
    marginRight:12,
   },
   type:{
    fontSize:22,
    fontWeight:'bold'
   },
   moveContainer:{
    marginBottom:16
   },
   move:{
    fontSize:22,
    fontWeight:'bold'
   },
   weakcontainer:{
    marginBottom:8
   },
   weak:{
    fontSize:22,
    fontWeight:'bold'
   }
})
export default Card