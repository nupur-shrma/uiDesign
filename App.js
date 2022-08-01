import React from "react";
import { Text, View, StyleSheet,TextInput,Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, ThemeContext } from 'react-native-elements';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backIcon}>
      <Icon name="arrow-left" size={30} color="#fff" />
      </View>
      <View style={styles.text}>
        <Text style={styles.BussinessTagline}>Your Business Details</Text>
        <Text style={styles.mainline}>Please add your business details below. Don’t have an ABN? no worries you can skip this step for now.</Text>
      </View>

      <View style={{ alignItems:'center' , justifyContent:'center' , marginVertical:20}}>
            <Avatar 
                rounded 
                icon={{ name: 'camera-enhance', type: 'material', color:'#A4A4A4',size:20}}
                titleStyle={{textTransform:'capitalize' , color:'red'}}
                size={100} 
                overlayContainerStyle={{backgroundColor: 'rgba(255, 255, 255, 0.04)'}}
            >
                 <Avatar.Accessory size={30} iconProps={{name:'camera-enhance'}} onPress={()=>{}} />
             </Avatar>

              <View style={{paddingTop:50,flexDirection:'row'}}>
              <Icon name="home-city" size={30} color="#4E4E4E" style={styles.icon}/>
              <View style={styles.verticleLine}></View>
              <TextInput 
                style={styles.input}
                placeholder="Business Name"
                placeholderTextColor="#fff"
              />
              </View>
              <View style={{paddingTop:20,flexDirection:'row'}}>
              <Icon name="counter" size={30} color="#4E4E4E" style={styles.icon2}/>
              <View style={styles.verticleLine1}></View>
              <TextInput 
                style={styles.input}
                placeholder="ABN Number"
                placeholderTextColor="#fff"
              />
              </View>
              <View style={{paddingTop:20,flexDirection:'row'}}>
              <Icon name="web" size={30} color="#4E4E4E" style={styles.icon3}/>
              <View style={styles.verticleLine2}></View>
              <TextInput 
                style={styles.input}
                placeholder="Got a website?"
                placeholderTextColor="#fff"
              />
              </View>

              <View style={{paddingTop:50}}>
                <View style={styles.Button}>
                <Text style={styles.Next}>Next</Text>
                </View>
              </View>

            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    //alignItems:'flex-start',
    backgroundColor:'#212121',
  },
  backIcon:{
    paddingTop: Platform.OS==='ios'?50:20,
    paddingLeft:10
  },
  text:{
    //paddingTop: 10,
    paddingLeft:10,
  },
  BussinessTagline:{
    color:'#fff',
    //fontStyle: normal,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 100
  },
  mainline:{
    color:'#fff',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  input:{
    padding:10,
    paddingLeft:50,
    borderColor:'rgba(255, 255, 255, 0.04)',
    borderWidth:1,
    width:350,
    height:52,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius:10
  },
  icon:{
    position:'absolute',
    top:60,
    left:10,
  },
  icon2:{
    position:'absolute',
    top:30,
    left:10,
  },
  icon3:{
    position:'absolute',
    top:30,
    left:10,
  },
  verticleLine:{
    height: '90%',
    width: 1,
    backgroundColor: '#4E4E4E',
    position:'absolute',
    left:45,
    top:53
  },
  verticleLine1:{
    height: '90%',
    width: 1,
    backgroundColor: '#4E4E4E',
    position:'absolute',
    left:45,
    top:23
  },
  verticleLine2:{
    height: '90%',
    width: 1,
    backgroundColor: '#4E4E4E',
    position:'absolute',
    left:45,
    top:23
  },
  Button:{
    paddingTop:10,
    //paddingLeft:50,
    borderColor:'#F97512',
    borderWidth:1,
    width:350,
    height:52,
    backgroundColor: '#F97512',
    borderRadius:10
  },
  Next:{
    color:'#fff',
    textAlign:'center',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
})

export default App;
