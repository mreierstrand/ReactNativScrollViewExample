import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginRight: 1,
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
    fontSize: 24,
  },
  textHeader: {
    textAlign:"center",
    fontSize: 40,
  },
  textRegular: {
    textAlign:"center",
    fontSize: 20,
  }
});

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Oliver', id: '1'},
    {name: 'Omar', id: '2'},
    {name: 'Talia', id: '3'},
    {name: 'Konrad', id: '4'},
    {name: 'Mathias', id: '5'},
    {name: 'Poul', id: '6'},
    {name: 'Mathias', id: '7'},
    {name: 'Anders', id: '8'},
    {name: 'Mohammed', id: '9'},
    {name: 'Michael', id: '10'},
    {name: 'Michael', id: '11'},
  ]);

  const deletePerson = (id) => {
    console.log(id);
    setPeople((previousPeople) => {
      return previousPeople.filter(person => person.id != id)
    })
  }

    
 return (
    <View style={styles.container}>
    <Text style={styles.textHeader}>Olivers FlatList</Text>
    <Text style={styles.textRegular}>Tryk for at slette elemeter på listen</Text>


      <ScrollView style={{marginTop: 20}}>
      {people.map(item => (
        <View key={item.id}>
        <TouchableOpacity onPress={() => deletePerson(item.id)}>
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        </View>
      ))}

      </ScrollView>

    </View>
  );
}


