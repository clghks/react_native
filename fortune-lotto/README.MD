# Fortun Lotto App 

## 프로젝트 생성 
```
expo init FortunLotto
```

## 템플릿 설정
```
Choose a template: expo-template-blank
```

## yran 설정 
```
yarn v1.19.1 found. Use Yarn to install dependencies? Yes
```

## expo 실행 
```
yarn start
```

## Underscore 라이브러리 추가 
times, shuffle 함수를 사용하기 위해 추가 
```
yarn add underscore
```

times
- https://underscorejs.org/#times

shuffle
- https://underscorejs.org/#shuffle


## Underscore 사용하기 
보통은 사용할 라이브러리 이름을 사용하지만 언더스코어는 _ 기호를 사용한다.
```
import _ from 'underscore';
```

## 로또 번호를 만들기 위한 방법 
1. 1 ~ 45 까지 번호 만들기 
```
let number = []
_.times(45, n => number.push(n + 1))
```

2. 번호 뒤섞기 
```
numbers = _.shuffle(number)
```

3. 6개 번호를 뽑기
```
numbers.length = 6;
```

4. 정렬 
```
numbers = _.sortBy( numbers ) 
```

5. 화면에 출럭 
```
numbers.join(', ')
```