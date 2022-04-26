import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { View, SafeAreaView, Text, Dimensions, Pressable, FlatList } from 'react-native'
const { width, height } = Dimensions.get('screen');
export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            formArray: []
        }
    }
    async componentDidMount() {
        this.checkAsyncFunction();
        const storage = JSON.parse(await AsyncStorage.getItem('Todo'))

        console.log(typeof storage);
        this.setState({ formArray:storage }) 
    
    }
    checkAsyncFunction = async ()=>{
      const status = await AsyncStorage.getItem('Todo') //initialising asyncStorage
      if ( status == undefined){
          await AsyncStorage.setItem('Todo',JSON.stringify([]))
      }
    }
    renderItem = ({ item }) => {
        console.log(this.state.formArray);
        return (
            <View style={{}} >
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>{item.date}</Text>
                <Text>{item.time}</Text>
            </View>
        )
    }
    render() {
        const num = {}
        console.log(typeof num);
        // console.log(height* 0.02);
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'aliceblue', }}>
                <View style={{ alignItems: 'center', marginTop: height * 0.02, marginBottom: height * 0.04 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Todo List</Text>
                    <Pressable onPress={() => {
                        this.props.navigation.navigate('AddTodo')
                    }}
                        style={{ height: height * 0.055, width: width * 0.8, padding: 10, marginTop: height * 0.02, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eb34b4' }}>
                        <Text style={{ fontSize: 16 }}>Add New Todo</Text>
                    </Pressable>
                </View>
                <FlatList style={{ flex: 1, borderWidth: 1 }}
                    data={this.state.formArray}
                    renderItem={this.renderItem} />
            </SafeAreaView>
        )
    }
}
{/* <View style={{ borderWidth: 1, marginTop: height * 0.02, flexDirection: 'row'}}>
                    <Text style = {{fontSize :16,borderWidth :1,padding:10}}>Sun</Text>
                    <Text style = {{fontSize :16,borderWidth:1,padding:10}}>Mon</Text>
                    <Text style = {{fontSize :16,borderWidth:1,padding:10}}>Tue</Text>
                    <Text style = {{fontSize :16,borderWidth:1,padding:10}}>Wed</Text>
                    <Text style = {{fontSize :16,borderWidth:1,padding:10}}>Thur</Text>
                    <Text style = {{fontSize :16,borderWidth:1,padding:10}}>Fri</Text>
                    <Text style = {{fontSize :16,borderWidth:1,padding:10}}>Sat</Text>
                </View> */}
