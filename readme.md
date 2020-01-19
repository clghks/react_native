# 강의 정보 

양재동 코드랩

리엑트 네이티브 한달 완성

https://www.codelabs.kr/codelabs/detail?no=92
* 참고 GitHub : https://github.com/GrotesQ/Codelab-React-Native-4th


## 개발 환경 구성 (Mac)

### HoemBrow 설치
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Yarn 설치 
```
brew install yarn
```

### expo-cli 설치
```
yarn global add expo-cli
```


# 리엑트 네이티브란?

## 네이티브 애플리케이션이란?
- 운영체제를 구성하는 언어와 같은 언어로 만들어지는 애플리케이션
    - ex) 안드로이드, 아이폰 
- 장점 : 높은 성능이 보장됨
- 단점 : 개발에 투입되는 리소스가 많아짐

## 하이브리드 애플리케이션이란?
- 웹뷰를 이용해 보이는 영역에 HTML을 보여줌 
- HTML + CSS + JS를 이용한 화면 구성 
- 네이티브로 만들어진 앱 컨테이너로 네이티브 기능 연동 
- 장점 : 웹 기술에 익숙하다면 빠른 개발 가능 
- 단점 : 뷰 퍼포먼스 최적화가 힘듬

## 크로스 플랫폼 네이티브 애플리케이션 (공식 용어는 아님 : 크로스 플랫폼 네이티브)
- 네이티브가 아닌 언어로 작성하지만 빌드 단계에서 네이티브로 변환됨
- 리엑트 네이티브(JS), 유니티, 자마린, 플러터(Dart) 등
- 장점 : 자신에게 익숙한 언어로 빠른 개발 가능 
- 단점 : 네이티브 연동 기능이 많을 경우에는 효율성이 떨어짐

### 리엑트 네이비는 정확히 네이티브인가요? 하이브르드인가요?
하이브리도 아니고 네이티브도 아니지만 구별 하기 힘들다

## 리엑트 네이티브에서 중요한것 - JSX
- javascript + xml
- ECMA script 6 표준의 자바스크립트 사용
- JSX 내에서 스타일 시트를 포함함
  웹의 CSS와 많은 개념을 공유 


## 애플리케이션의 구조 
데이터는    JS
        브릿지 
뷰는    네이티브


# 시뮬레이터 단축키 
ios
command + D     디버그 
command + R     리로드 

android
command + m     디버그 
r키를 두번 빠르게   리로드



# 기술 조사?
npm과 yarn의 차이점은?
동작은 동일 하지만 예전에는 npm이 느려서 yarn을 사용했다?
