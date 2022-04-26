import React, { Component } from 'react'
import { View, SafeAreaView, Text, Dimensions, TextInput, Pressable, } from 'react-native'
import DatePicker from 'react-native-datepicker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const { width, height } = Dimensions.get('screen');
export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            formData: {
                title : '',
                description : '',
                date : '',
                time : ''
            },
            formArray: []
        }
    }
    formDataChange = (field, value) => {
        // console.log(field, value);
        const { formData } = this.state
        formData[field] = value
        this.setState({ formData: formData })
    }
    onClickHandler = async () => {
        const { formData, formArray } = this.state
        const getParse = JSON.parse(await AsyncStorage.getItem('Todo'))
        getParse.push(formData)
        await AsyncStorage.setItem('Todo', JSON.stringify(getParse))
        this.props.navigation.navigate('Welcome')
    }
    render() {
        // console.log(height*0.02)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'aliceblue' }}>
                <View style={{ alignItems: 'center', marginTop: height * 0.02, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Add New Todo</Text>
                    <View style={{ marginTop: height * 0.008, width: width * 0.9, }}>
                        <TextInput value={this.state.formData.title}
                            onChangeText={(text) => this.formDataChange('title', text)}
                            placeholder='Title:'
                            style={{ borderWidth: 1, height: height * 0.05, marginHorizontal: width * 0.01, padding: 10, marginBottom: height * 0.009, borderRadius: 5, }} />
                        <TextInput value={this.state.formData.description}
                            onChangeText={(text) => this.formDataChange('description', text)}
                            placeholder='Description' multiline={true}
                            style={{ borderWidth: 1, height: height * 0.09, marginHorizontal: width * 0.01, padding: 10, marginBottom: height * 0.005, borderRadius: 5, }} />
                        <View style={{ alignItems: 'center', marginTop: height * 0.008, }}>
                            <DatePicker date={this.state.formData.date}
                                onDateChange={(text) => this.formDataChange('date', text)}
                                style={{ width: width * 0.87, }}
                                placeholder="select date"
                                mode="date"
                                minDate="2022-04-26"
                                maxDate="2022-12-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel" />
                            <DatePicker date={this.state.formData.time}
                                onDateChange={(text) => this.formDataChange('time', text)}
                                style={{ width: width * 0.87, marginTop: height * 0.009, }}
                                placeholder="select time"
                                mode="time"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel" />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Pressable onPress={async () => this.onClickHandler()}
                                style={{ height: height * 0.055, width: width * 0.85, padding: 10, marginTop: height * 0.02, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fc5e03' }}>
                                <Text style={{ fontSize: 16 }}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}