import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const imageUrl = 'https://lh3.googleusercontent.com/PDjtZkl3ZxNRZnE7god9xruq7ArV9Yv8LGucLu1ukIORExpRX6LcM-SOICAf_KQcKog'
const answers = [
  '"둘 다."',
  '"하지마."',
  '"안되."',
  '"다시 질문해 봐."',
  '"언젠가는."',
  '"조만간."'
]

export default function App() {
  const [ answer, setAnswer ] = React.useState('');
  function ask() {
    const index = Math.floor(Math.random() * answers.length );
    setAnswer(answers[index]);
  };

  const answerStyle = {
    fontSize: 24,
    fontWeight: 'bold'
  };

  return (
    <View style={styles.container}>
      <Text style={{ margin: 10 }}>질문을 말한 후 소라고동님을 터치해주세요.</Text>
      <TouchableOpacity onPress={ ask } >
        <Image source={{ uri: imageUrl}} style={{ width: 256, height: 256 }} />
      </TouchableOpacity>
      <Text style={answerStyle}>{ answer }</Text>
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
