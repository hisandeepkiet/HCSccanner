import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Image, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isScaned, setIsScaned] = useState(true);
  const [isScaned1, setIsScaned1] = useState(true);
  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>Health Card Scanner</Text>
      <Image
      style={styles.tinyLogo}
        source={{
          uri: 'https://www.chargestripe.com/wp-content/uploads/2019/11/credit-card-scanner-payouts-300x300.png',
        }}
      />
      <Text style={styles.tbText} >GDPR requires that organizations have a lawful basis for processing data. One such basis is consent, which according to the GDPR has to be explicit and freely given. This means that the mechanism for acquiring consent must be unambiguous and involve a clear affirmative action.
       </Text>
       <View style={{marginVertical: 10}}>
       <Button style={styles.buttonStyle}
        onPress={() => {
          setIsScaned(false);
        }}
        disabled={!isScaned}
        title={isScaned ? "Scan!" : "Thank you!"}
      />
      </View>
      <View style={{marginVertical: 10}}>
      
      <Button style={styles.buttonStyle}
        onPress={() => {
          setIsScaned1(false);
        }}
        disabled={!isScaned1}
        title={isScaned1 ? "Show Scanned Card!" : "Thank you!"}
      />
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 header: {
   fontSize: 30,
   color: 'black',
   paddingTop: 5,
   marginTop:1,
 },

 buttonStyle: {
  color: '#CF2207',
  
},
tinyLogo: {
  width: 300,
  height: 300,
},
tbText: {
  fontSize : 15,
  fontFamily: "sans-serif",
  fontWeight: "bold",
  color: '#141823',
  textAlign: 'center',
  textAlignVertical : 'center',
  marginLeft: 50,
  marginRight:50,
  


}
});
