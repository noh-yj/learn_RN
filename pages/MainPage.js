import React from 'react';
import { StyleSheet, Text, View, Share, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

function MainPage() {
  const share = () => {
    Share.share({
      message: '공유하기 기능!',
    });
  };
  const link = () => {
    Linking.openURL('https://www.naver.com');
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>hello Main Page</Text>
        <TouchableOpacity style={styles.btnWrap} onPress={share}>
          <Text style={styles.btn}>Btn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrap} onPress={link}>
          <Text style={styles.btn}>linking</Text>
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
  btnWrap: {
    width: 100,
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'deeppink',
    borderRadius: 7,
  },
  btn: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default MainPage;
