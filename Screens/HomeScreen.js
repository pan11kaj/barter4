import React,{Component} from 'react';
import { StyleSheet,  View,TouchableOpacity ,Text,FlatList, ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase'

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            allItems:[]
        }
    }
  
    componentDidMount = async()=>{
        const query = await db.collection("Users").get()
        query.docs.map((doc)=>{
            this.setState({allItems:[...this.state.allItems,doc.data()]})
        })
      
        }

    render(){
        return(
          
          <ScrollView>
              <Text style={styles.head}>All Items</Text>
              {
                  this.state.allItems.map((item,index)=>{
                      return(
                      <View key={index} >
                   
                      <Text  style={styles.outputs}>**{"Item Name:-"+item.Item}</Text>
                      <TouchableOpacity style={styles.buton}><Text style={{textAlign:'center'}}>Donate </Text></TouchableOpacity>
                      <Text style={styles.des}>{"Description:-"+item.Des}</Text>
                      </View>)
                  })
              }
          </ScrollView>
    
    
        )
        }}        
const styles = StyleSheet.create({
    des:{
     fontSize:17,color:'green',maxWidth:280,backgroundColor:"yellow"
    },
    outputs:{
      fontSize:20,color:'blue',marginTop:50,backgroundColor:'yellow',maxWidth:280
    },head:{ flex:1, fontSize: 28, alignItems:'center',marginTop:50,textAlign:'center',backgroundColor:'red', },
    buton:{
        alignItems:'flex-end',borderWidth:2,width:70,backgroundColor:'red',marginLeft:300,borderRadius:30
    }
})