import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import _ from 'underscore';

// 1. 로또 번호를 1~45까지 생성 
// 2. 로또 번호 뒤섞기
// 3. 6개 번호 출력 

let number = []
_.times(45, n => number.push(n + 1))    // 45번 반복
numbers = _.shuffle(number)             // 뒤섞기 
numbers.length = 6;                     // 6개만 사용 
numbers = _.sortBy( numbers )           // 정렬

export default function App() {
  const style = {
    width: 238,
    height: 150
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.seekpng.com/png/full/48-487137_fortune-cookie-fourchon-cookie.png' }} style={ style } />
      <Text>{ numbers.join(', ') }</Text>
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
