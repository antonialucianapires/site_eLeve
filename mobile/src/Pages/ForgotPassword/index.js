import React from 'react';
import { StyleSheet, Text, ScrollView, Image, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';

const ForgotPassword = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Image 
        source={require( './src/img/logo1.png')}
        style={styles.logo}/>
      <Image 
        source={require('./src/img/name.png')}
        style={styles.title} />
      <TextInput
        style={styles.inputRecuperar}
        placeholder="CPF ou E-mail"
        placeholderTextColor= "#FFFFFF"
        autoCapitalize= "none"
        autoCorrect={false}
        underlineColorAndroid= "transparent"
        keyboardType="email-address"
        returnKeyType="send"/>
      <TouchableOpacity onPress={() => {}} style={styles.buttonpassword}>
        <Text style={styles.buttonForm}>Recuperar senha</Text>
      </TouchableOpacity>
      <View style={styles.containerEntrar}>
      <TouchableOpacity onPress={() => {}} >
          <Text style={styles.linkText}>Entrar</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
  },
  logo:{
    alignSelf:'center',
    marginTop: '10%'
  },
  title:{
    alignSelf:'center',
    marginBottom: '15%',
  },
  inputRecuperar: {
    backgroundColor: 'rgba(189, 189, 189, 0.35)',
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
    paddingLeft: 15,
    textAlign: 'center',
  },
  buttonpassword: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
    width: 4,
    height: 4,
    },
  },
  buttonForm: {
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 7,
    fontSize: 16,
  },
  scrollView:{
    marginHorizontal: 20,
  },
  containerEntrar:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: 'center',
  },
  linkText:{
    paddingHorizontal: 2,
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ForgotPassword;