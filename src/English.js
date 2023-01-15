// import { View, Text } from 'react-native'
// import React from 'react'

// export default function English() {
//   return (
//     <View>
//       <Text>E</Text>
//     </View>
//   )
// }
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    SafeAreaVie,
    ScrollView
  } from "react-native";
  import { useState } from "react";
  
  export default function English() {
    const [input, setInput] = useState("");
    const [checkingWord, setCheckingWord] = useState("");
    const [resault, setResault] = useState("");
    const [example, setExample] = useState("");
    const [egss, setEgss] = useState("");
  
    const wordSearch = (enteredWord) => {
      setInput(enteredWord);
    };
  
    const clear = () => {
      setCheckingWord("");
      setResault("");
      setExample("");
      setInput("");
    };
  
    const getInfo = () => {
      var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + input;
  
      return fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          var word = response[0].word;
          setCheckingWord(word);
  
          var def = response[0].meanings[0].definitions[0].definition;
          setResault(def);
  
          var eg = response[0].meanings[0].definitions[0].example;
          setExample(eg);
  
          var egs = response[0].meanings[0].partOfSpeech;
          setEgss(egs);
        });
    };
  
    return (
        <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/language.jpg")}
          resizeMode="cover"
          style={{ flex: 1, flexDirection: "column" }}
        >
        <SafeAreaView >
          <TextInput
            style={styles.textInputArea}
            placeholder="search a word"
            placeholderTextColor={"gray"}
            textAlign="center"
            clearButtonMode="always"
            onChangeText={wordSearch}
            value={input}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={styles.buttonDesign1}
              onPress={() => {
                getInfo();
              }}
            >
              <Text style={styles.txts}> GO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDesign}
              onPress={() => {
                clear();
              }}
            >
              <Text style={styles.txts}> Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 7, borderRadius: 15, marginTop: 60 }}>
            <View style={styles.textDesignView}>
              <Text style={styles.textDesign}>{checkingWord} = {egss} </Text>
            </View>
            <View style={styles.textDesignView}>
              <Text style={styles.textDesign}>Definition : </Text>
              <Text style={styles.textDesign}>{resault} </Text>
            </View>
            <View style={styles.textDesignView}>
              <Text style={styles.textDesign}>Example : </Text>
              <Text style={styles.textDesign}>{example} </Text>
            </View>
          </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    textDesignView: {
      // backgroundColor: "#52361b",
      backgroundColor: "#c1141c",
      borderRadius: 15,
      marginBottom: 2,
      fontSize:10
    },
    txts: {
      textAlign: "center",
      paddingTop: 5,
      paddingRight: 2,
      fontSize: 22,
      // fontWeight: "bold",
      color: "white",
    },
    textInputArea: {
      paddingVertical: 12,
      marginBottom: 50,
      marginTop: 170,
      marginHorizontal: 20,
      backgroundColor: "#fff",
      fontSize: 22,
      // fontWeight: "bold",
      borderRadius: 15,
      width: 360,
      textAlign: "center",
      borderWidth: 2,
      borderColor: "#A59C99",
    },
    buttonDesign: {
      backgroundColor: "#A21414",
      width: 140,
      height: 45,
      borderColor: "#B70202",
      borderWidth: 1,
      borderRadius: 15,
      marginHorizontal: 40,
    },
    buttonDesign1: {
      borderColor: "green",
      backgroundColor: "green",
      width: 140,
      height: 45,
      borderWidth: 1,
      borderRadius: 15,
      marginHorizontal: 40,
    },
    textDesign: {
      color: "white",
      borderBottom: 10,
      borderBottomColor: "white",
      fontSize: 25,
      marginTop: 10,
      marginBottom: 10,
      alignSelf: "center",
      paddingHorizontal:16
  
    },
  });
  