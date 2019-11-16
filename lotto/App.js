import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import _ from 'underscore';

// JSX 리엑트 함수형 컴포넌트
function Ball(props) {
  const ballStyle = {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
  const textStyle = {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  };

  if (props.number <= 10) {
    ballStyle.backgroundColor = '#fbc400';
  } else if (props.number <= 20) {
    ballStyle.backgroundColor = '#69c8f2';
  } else if (props.number <= 30) {
    ballStyle.backgroundColor = '#ff7272';
  } else if (props.number <= 40) {
    ballStyle.backgroundColor = '#aaa';
  } else {
    ballStyle.backgroundColor = '##b0d840';
  } 

  return (
    <View style={ ballStyle }>
        <Text style={ textStyle }>{ props.number }</Text>
    </View>
  );
} 

export default function App() {
  function updateLottoNumber() {
    let number = []
    _.times(45, n => number.push(n + 1))    // 45번 반복
    numbers = _.shuffle(number)             // 뒤섞기 
    numbers.length = 6;                     // 6개만 사용 
    numbers = _.sortBy(numbers)             // 정렬 

    setLottoNumber(numbers)
  }

  const [ lottoNumber, setLottoNumber ] = React.useState( [0, 0, 0, 0, 0, 0] );

  return (
    <View style={styles.container}>
      <Ball number={ lottoNumber[0] } />
      <Ball number={ lottoNumber[1] } />
      <Ball number={ lottoNumber[2] } />
      <Ball number={ lottoNumber[3] } />
      <Ball number={ lottoNumber[4] } />
      <Ball number={ lottoNumber[5] } />

      <Button title='다시 뽑기' onPress={ updateLottoNumber } />
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
