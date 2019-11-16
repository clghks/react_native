# Fortun Cookie App 

## 프로젝트 생성 
```
expo init FortunCookie
```

## 템플릿 설정
```
Choose a template: expo-template-blank
```

## yran 설정 
```
Yarn v1.19.1 found. Use Yarn to install dependencies? Yes
```

## expo 실행 
```
yarn start
```

## 이미지 검색 
구글에서 포춘 쿠키 검색 
![포춘 쿠키](https://www.seekpng.com/png/full/48-487137_fortune-cookie-fourchon-cookie.png)

## 이미지 사용 방법 
React-Native Doc : https://facebook.github.io/react-native/docs/image
```
import { Image } from 'react-native';

export default function App() {
  const style = {
    width: 238,
    height: 150
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.seekpng.com/png/full/48-487137_fortune-cookie-fourchon-cookie.png' }} />
    </View>
  );
}
```

## 랜덤 함수 사용 
```
const message = [
  '발 밑을 조심하세요!',
  '오래 기다려온 연락이 올 것 같습니다.',
  '건강에 유이하는 하루가 되시길'
];
const index = Math.floor( Math.random() * message.length );

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ message[index] }</Text>
    </View>
  );
}
```
