import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const imageUrl = 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/kDx/image/Nr1LCf_PHCUJ85AznXn9Rq8bOR0.jpg';
let number = 0

// setInterval(() => {
//   number++;
//   alert(number)
// }, 2000)

export default function App() {
  // 상태 state 
  /*
    아래 코드와 같은 의미
    const opactiyState = React.useState( 0.5 ); // 배열 
    opactiyState[0] 값 
    opactiyState[1] 값을 업데이트 할수 있는 함수 
    const opactiy = opactiyState[0];
    const setOpactiy = opactiyState[1];
  */
  const [ opacity, setOpacity ] = React.useState( 0.5 );

  function opacityDown() {
    setOpacity( opacity - 0.1 );
  };

  function opacityUp() {
    setOpacity( opacity + 0.1 );
    // number++;
    // alert(number)
  };

  return (
    <View style={styles.container}>
      <Image source= {{ uri: imageUrl }} style={{ width: 320, height: 214, opacity: opacity }} />
      <Button title={'투명하게'} onPress={ opacityDown } />
      <Button title={'선명하게'} onPress={ opacityUp } />
      <Text>{ number }</Text>
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
