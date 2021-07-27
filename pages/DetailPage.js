import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

function DetailPage() {
  console.log('hello');
  const popUp = () => {
    Alert.alert('팝업!');
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>hello Detail Page</Text>
        <TouchableOpacity style={styles.button} onPress={popUp}>
          <Text style={styles.btnText}>popup</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f266a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
  },
  button: {
    width: 100,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'deeppink',
    borderRadius: 7,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default DetailPage;
