
# 개발일지

## 2023-03-04 진행상황 

- vscode cra 설치시 npm 으로 하다가 안되어서 npx로 해서 해결(vscode react설치 미숙함으로 이런 간단하것도 개발일지에 기록을 잘해놔야 겠다고 생각들었습니다.)

---
## 2023-03-05 진행상황 

- emmet이 적용방법 까먹어서 찾아봐서 다시적용했습니다.

- 템플릿공부

- 라이징테스트이해

- github 공부

참고> https://github.com/orgs/community/discussions/23135

https://blog.csdn.net/kokunka/article/details/122710639

https://velog.io/@cgw7976/giruboyGit-LF-will-be-replaced-by-CRLF-the-next-time-Git-touches-it

---
## 2023-03-06 진행상황 

- main 페이지/ slider 작업중입니다.

- github 프로젝트만 올려봐서 다른작업에 미숙해서 다른구글링 쳐서 따라해보다가 Readme 파일이 날라갔습니다ㅜㅠ ..

- 구글링하며 알아보다가 시간너무 많이들어서 t스토리에 적기로 결정했습니다. 



## 2023-03-07 진행상황

- 메인페이지 헤더완성/slider 작업중/ 나머지 항목작업중입니다.

- styled-components 에 대해서 좀 더 공부하고 / styleld-components 밑에 class를 사용하는것도

좀 더 익혔습니다.html 에대해서도 더 공부했습니다.

- <github commit 해결>

git add. -> git status 로 modified 된거 확인후 -> git commit -m 'third commit' 

 11 files changed, 621 insertions(+), 319 deletions(-) 메세지확인후 

$ git push orgin master
fatal: 'orgin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists. 

등 오류가 계속나와서 구글링 계속하다가 

https://stackoverflow.com/questions/32056324/there-is-no-tracking-information-for-the-current-branch

https://velog.io/@2ujin/%EA%B9%83-Pull-is-not-possible-because-you-have-unmerged-files-%EC%97%90%EB%9F%AC

이 2개로 해결했습니다.

---
## 2023-03-08 진행상황

- 메인페이지 작업중-> css 적용이 안되는것으로 오류/ 
- 개발팀장님에게 피드백을 받고나서 속도를 많이 높여야겠다고 생각했습니다.
- 계속 서버분과 1:1로 dm해서 궁금한것도 여쭤보고 서로 피드백을 받은것을 공유했습니다.
- github가 미숙해서 오류난것을 해결하기위해서 시간쏟고 commit을 할수있게됬습니다. (pull -> push)


## 2023-03-09 진행상황
- 메인페이지 어느정도 끝나고 login 화면작업도 시작했습니다.(api 연결을위해서)그리고 생각보다 시간이 많이드는것 같습니다. 
기존에 슬라이더도 구현해봤지만 좀 변형되서 나오니까 바로 처리는 안되고 익숙하지 않아서 이부분도 시간이 드는것 같습니다.
- styled가 적용안되는것도 있고 그래서 어려움이 있지만 차차 해결된것도 있어서 할수있을것같습니다.시  간이문제..
- style 문법등 다시 공부하는것도 있고 속도좀 많이 높여야겠다고 생각이 들었습니다.


## 2023-03-10 진행상황 
- login 페이지 작업중에 평소에 css module로 했었을때는 오류가 안났었는데 styled component - class로 css를 작성하니까 잘 모르는것도 있고 css가 적용이 잘 안되는 오류때문에 속도가 안나서 힘든상황입니다 ㅠㅜ..
- useNavigate 를 다시 써봄으로서 메인-> 로그인페이지로 이동구현

## 2023-03-11 진행상황
- styled-componets 에 자식class 적용의 햇갈림 / login 첫화면 구현
## 2023-03-12 진행상황
- useNavigte / Link 차이공부 -> 실제적용으로 로그인버튼눌렀을때 페이지 이동 구현
- 
## 2023-03-13 진행상황
- 메인페이지 css 오류난것들 수정 + 메뉴호버 구현도중 오류나서 해결중 + 메인페이지 슬라이더 구현(+ 슬라이더 안에있는 카드들 map으로 보내주는것 미리 작성함 가상으로)


## 2023-03-14 진행상황
- login 페이지를 완료했으나 이메일로 가입할때 나오는창을 안만들었어서 로그인창 관련해서 더 만들었습니다.


## 2023-03-15 진행상황
- 2단메뉴 호버 작업중 오류가 나서 시간이 많이들어서 작업을 미뤘습니다.
- styled components 자식class 적용을 처음하는거라 어려움을 느꼈습니다.

## 2023-03-16 진행상황
- 라이브러리 없이 슬라이더 구현
- 로그인 api 시도 해봤으나 잘 안됬습니다.
- 열심히하다가 잘 안되어서 멘탈이나감..(로그인 api 시도해봤으나 작동안됨), checkbox 도 적용했으나 잘되어서 멘탈나감 / 포기하고싶은 무기력상태까지 도달함
## 2023-03-22 진행상황
- 포기하고 싶었으나 다시 멘탈잡고 할수있는상태에서 해봤습니다.
- onclick 색상변환 이벤트 계속적용해봤으나 안되어서 미뤘습니다.
- api 3개 구현  / 메인페이지 오류없애기 
- 로그인 api 구현중 Mandatory 에 있는것을 다안적고 하니까 계속 오류가 나는것이였습니다. 다안적고 왜 오류나는지 모르다가 알게되었습니다.
- flex -> 오른쪽으로 나아가짐(개념공부)
- div key 를 전체를 감싸주지 않아서 div가 깨지는현상 해결했습니다.
