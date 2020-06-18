import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text, Picker, Image } from 'react-native';
import Languages from './languages.json';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';

const access = 'ya29.c.Ko8B0AfecCSZ5_kw-SiWXO0M5xTFC7zqKwtIrcwScQ0NcfT9oyz-_4j74hj618FUvW3Atep3AYIj-h7Je0POA6kswdYKzOCUz3TDgh0T-ov86aQomo21Ese-QjDkxhO6Z7viRCdf1Qm0tPKQrG51w2av2-acLcw4PrjlXHQVuZSTchHs4MZA7pygDIt2hFHOg1o';
export default class Translator extends Component {

   constructor(props) {
       super(props);
       this.state = {
           languageFrom: "",
           languageTo: "",
           languageCode: 'en',
           inputText: "",
           outputText: "",
           submit: false,
       };
   }

	handleTranslate(){
       const source = 'ru';
       const target = 'en';
       const q = this.state.inputText;
       const query = `format=text&source=${source}&target=${target}&q=${q}`
       fetch('https://translation.googleapis.com/language/translate/v2?'+query, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Bearer '+access
               // 'Content-Type': 'application/x-www-form-urlencoded',
           },
       }).then(a => a.json()).then(a => {
           this.setState({outputText: a.data.translations[0].translatedText})
       });
    }

   render() {
	   TranslatorConfiguration.setConfig(ProviderTypes.Google,'@google-cloud/translate', this.state.languageCode);
       return (
           <View style = {styles.container}>
               <View style={styles.input}>
                   <TextInput
                       style={{flex:1, height: 80}}
                       placeholder="Enter Text"
                       underlineColorAndroid="transparent"
                       onChangeText = {inputText => this.setState({inputText})}
                       value={this.state.inputText}
                   />
               </View>

               <Picker 
               selectedValue={this.state.languageTo}
               onValueChange={ lang => this.setState({languageTo: lang, languageCode: lang})}
               >
                   {Object.keys(Languages).map(key => (
                       <Picker.Item label={Languages[key]} value={key} />
                   ))}
               </Picker>

               <View style = {styles.output}>
                  {/* output text displays here.. */}
				  <TextInput
                       style={{flex:1, height: 80}}
                       underlineColorAndroid="transparent"
                       value={this.state.outputText}
                       disabled="true"
                   />
               </View>
               <TouchableOpacity
                   style = {styles.submitButton}
                   onPress = {() => this.handleTranslate()}
               >
                   <Text style = {styles.submitButtonText}> Submit </Text>
               </TouchableOpacity>
           </View>
		   
       )
   }
}

const styles = StyleSheet.create({
   container: {
       paddingTop: 53
   },
   input: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
       borderWidth: .5,
       borderColor: '#000',
       // height: 40,
       borderRadius: 5 ,
       margin: 10
   },
   output: {
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
       borderWidth: .5,
       borderColor: '#000',
       borderRadius: 5 ,
       margin: 10,
       height: 80,
   },
   submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       borderRadius: 5 ,
       height: 40,
   },
   submitButtonText:{
       color: 'white'
   },
})