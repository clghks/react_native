import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const imageURL = 'https://www.seekpng.com/png/full/48-487137_fortune-cookie-fourchon-cookie.png';
const message = [
  '발 밑을 조심하세요!',
  '오래 기다려온 연락이 올 것 같습니다.',
  '건강에 유이하는 하루가 되시길'
];
const index = Math.floor( Math.random() * message.length );

export default function App() {
  const source = {
    uri: imageURL
  }

  const style = {
    width: 238,
    height: 150
  }

  return (
    <View style={styles.container}>
      <Image source={ source } style={ style } />
      <Text>{ message[index] }</Text>
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
});
