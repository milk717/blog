---
date: 2024-04-08
title: 어떻게 하면 마크다운 블로그에서 게시글을 편하게 작성할 수 있을까?
excerpt: 옵시디언을 마치 상용 블로그 서비스의 게시글 작성 에디터로 탈바꿈시켜 주는 세팅 방법에 관해 설명하고 있습니다. 더 이상 힘들게 블로깅 하지 마세요!
category: 개발
tags:
  - 블로그
  - Gatsby
  - Obsidian
thumbnail: https://i.imgur.com/gXuAAis.png
slug: making-blog1
updated: 2024-05-05T16:58
---
개발자라면 누구나 자신의 블로그를 직접 만들어 운영하고 싶은 로망이 있을 것입니다. 직접 만든 블로그는 커스텀이 자유로워서 재미있는 나만의 놀이터가 될 수 있지만, 별도의 게시글 작성 에디터가 존재하지 않기 때문에 글 작성 시 몇 가지 불편함이 존재합니다. vscode나 Webstorm같은 코드 에디터에서 글을 작성하게 되면 뭔가 이쁘지 않은 UI와, 글감이 떠오를 때마다 코드 에디터를 켜야 한다는 사실이 글쓰기에 대한 귀찮음을 올려줍니다. 게다가 이미지를 넣어야 할 때면 이미지를 복사해서 별도의 디렉터리에 넣고, 해당 디렉터리에 있는 이미지 주소를 마크다운 본문에 넣어줘야 하는 작업이 너무나도 번거롭고 귀찮습니다.
글 작성을 좀 더 편안하게 해보고자 노션에서 글을 쓰면 문제는 해결되지만, 글 작성이 완료된 후 포스팅을 게시하기 위해서 노션에 있는 글을 다시 마크다운에 넣어줘야 하는 추가적인 작업이 필요합니다. 텍스트뿐인 글이라면 금방 옮기겠지만 이미지가 들어간 글이라면 이미지 주소를 다시 작성해야 하는 불편함이 추가됩니다.
이런 모든 불편을 해소하기 위한 최고의 해결책은 바로 옵시디언을 사용하는 것입니다!
옵시디언을 통해 마크다운 블로그 게시글을 작성하면 위에서 말한 모든 불편함을 없앨 수 있습니다.
이번 게시글에서는 옵시디언을 마치 상용 블로그 서비스의 게시글 작성 에디터로 탈바꿈시켜 주는 세팅 방법에 관해 설명하고 있습니다. 더 이상 힘들게 블로깅 하지 마세요!
# 옵시디언 세팅 방법
## 게시글에 이미지를 쉽게 첨부하기 위한 세팅
여러분은 마크다운 블로그 게시글 작성 시 해당 게시글에 들어가는 이미지들을 어떻게 관리하시나요?
저는 아래와 같은 폴더 구조로 이미지를 관리하고 있습니다.
![게시글, 이미지 폴더구조](https://i.imgur.com/gyf2eEQ.png)
각 게시글에 해당하는 폴더 내부에 마크다운 파일, 마크다운 파일 안에 들어갈 이미지들이 있는 폴더를 두어 관리하는 형태죠. 따라서 블로그에 이미지를 첨부하기 위해서는 `images`폴더에 이미지를 넣고 이 경로를 마크다운 문법으로 작성해서 추가해야 합니다. 이 과정이 정말 번거롭지 않으셨나요?
다음 세팅을 따라 하면 게시글을 작성하다가 `ctrl + v`로 이미지를 붙여 넣었을 때 자동으로 `images`폴더 내부에 저장되도록 할 수 있습니다.
### 옵시디언에서 마크다운 링크 문법 사용하기
옵시디언은 전통적인 마크다운 경로 문법 대신에 wikilink 문법을 통해 경로를 지정합니다. 편리한 문법이긴 하지만 마크다운 블로그를 위한 문법은 아니죠. 따라서 이 설정을 변경해야 합니다.

1. `설정 > 파일 및 링크` 설정에 들어갑니다.
2. [[wikilink]] 사용 옵션을 해제합니다.
### 이미지 저장 경로 설정하기
이미지를 붙여넣을 때 이미지가 저장되는 경로가 자동으로 지정되도록 하려면 다음과 같은 설정을 해야합니다.

1. `설정 > 파일 및 링크` 설정에 들어갑니다.
2. `새 첨부 파일을 만들 위치` 옵션과 `하위 폴더 이름` 옵션을 아래 이미지와 같이 설정합니다.
![이미지 저장 경로 옵션](https://i.imgur.com/ld13Nnb.png)
이렇게 설정하면 붙여넣기한 이미지가 현재 폴더의 `images` 폴더 내부에 저장됩니다. 만약 `images`폴더가 존재하지 않는다면 자동으로 생성됩니다.
### 이미지 자동 네이밍 설정하기
붙여넣기로 이미지를 추가한다면 `스크린샷%202024-03-11%20오후%2011.55.50.png`와 같은 길고 지저분한 이름으로 저장됩니다. 이미지가 많아진다면 이런 이름으로 인해 관리가 힘들어지죠. 이럴 때 [Paste image rename](obsidian://show-plugin?id=obsidian-paste-image-rename)플러그인이 유용합니다.
이미지 붙여넣기시 패턴에 따른 자동 이름을 지정할 수도 있고, 붙여넣기 시 띄워지는 다이얼로그로 이름을 지정할 수도 있죠. 이 플러그인은 다음과 같은 단계를 거쳐 설정할 수 있습니다.

1. [Paste image rename](obsidian://show-plugin?id=obsidian-paste-image-rename) 플러그인을 설치합니다.
2. 플러그인 설정에서 아래 이미지와 같이 설정합니다.
   ![Paste image rename 플러그인 설정](https://i.imgur.com/z7iWkZ8.png)

   `Image name pattern` 옵션은 붙여넣기한 이미지의 이름을 결정하는 옵션입니다. 저는 img라는 이름으로 설정되도록 해서 붙여넣기한 이미지의 이름이 `img`, `img-1`, `img-2`,.... 으로 설정되도록 했죠.
   `{{fileNmae}}` 템플릿을 사용해서 이미지 이름에 파일명을 넣을 수도 있고, `{{DATE:YYYYMMDD}}` 템플릿을 통해 타임스템프를 넣을 수도 있습니다. 하지만 저는 단순한 이름이 좋아서 `img`로 설정했습니다.

   `Auto rename`옵션은 이미지 이름이 자동으로 변경될지 결정하는 옵션입니다. 만약 저 옵션을 꺼둔다면, 아래 보이는 것 처럼 이미지를 붙여넣을 때 다이얼로그가 뜨고 이름을 지정할 수 있습니다.
   ![Auto rename 옵션이 꺼져있을 때](https://i.imgur.com/uXWasD2.png)

### 옵시디언에서 이미지 캡션을 보기 위한 설정
일반적으로 마크다운 블로그에서 이미지를 첨부할 때 대괄호로 감싸진 부분에 있는 텍스트가 캡션으로 표시됩니다.
`[캡션](images/img-1.png)` 형식의 경로가 있다면 "캡션"이라는 글자가 캡션 부분에 노출되게 되죠. 하지만 옵시디언에서는 이미지의 캡션을 표시해주지 않습니다. 따라서 이를 설정하려면 별도의 플러그인이 필요합니다.

[image-captions 플러그인](obsidian://show-plugin?id=image-captions) 을 설치하기만 하면 별다른 설정을 하지 않아도 옵시디언에서 이미지 캡션을 볼 수 있습니다.
이 설정을 하지 않아도 글을 작성하고 게시글을 올리는데는 전혀 지장이 없지만, 옵시디언에서 보이는 내용과 실제 블로그에서 보이는 내용이 최대한 비슷해야 더 쾌적환 블로깅 환경을 만들 수 있으므로 설정하는 것이 좋습니다.
### 실수로 추가한 이미지를 쉽게 제거하기 위한 설정
여기까지 제가 안내한 대로 설정했다면 붙여넣기 한 이미지가 자동으로 `images` 폴더에 저장됩니다. 하지만 글을 작성하다 보면 실수로 이미지를 추가하는 경우가 있기도 합니다. 이때 게시글에서 이미지 링크를 지우고, `images`폴더에 들어가서 사진 파일을 삭제하는 것은 정말 귀찮은 일입니다. 이럴 때는 [Clear unused Image](obsidian://show-plugin?id=oz-clear-unused-images) 플러그인을 사용해서 귀찮은 과정을 손쉽게 바꿀 수 있습니다.

[Clear unused Image](obsidian://show-plugin?id=oz-clear-unused-images) 플러그인을 설치한 후 옵시디언의 `Cmd + P` 단축키를 사용해 명령어 탈레트를 켜고 명령어를 실행시키면 현재 참조되고있지 않은 이미지를 자동으로 삭제해줍니다. 마치 수동으로 실행하는 가비지 컬렉터같죠?
![](https://i.imgur.com/7lKJc1b.png)


게시글 작성 후 커밋을 올리기 전에 이 과정을 통해 이미지를 제거하면 필요하지 않은 이미지가 깃허브에 올라가지 않아서 커밋 기록을 깔끔하게 유지할 수 있습니다.
## 웹사이트 링크를 붙여넣을 때 편리한 설정
[Auto Link Title](obsidian://show-plugin?id=obsidian-auto-link-title) 플러그인을 사용하면 웹사이트 링크를 붙여넣었을 때 해당 사이트의 title을 자동으로 가져옵니다.
상용 블로그 서비스처럼 이쁘게 링크를 가져오는 기능이 없는 마크다운 블로그에서는 자동으로 제목을 가져오는 기능이 정말 편리합니다.
## 옵시디언의 다양한 콜아웃을 블로그에서 작성하기
>[!note]
>아래 내용은 Gatsby나 Next.js 블로그처럼 React 라이브러리 기반으로 만들어진 프레임워크로 구축된 블로그에만 해당하는 내용입니다.

옵시디언에는 [다양한 종류의 콜아웃](https://help.obsidian.md/Editing+and+formatting/Callouts)이 있습니다.
![옵시디언의 다양한 콜아웃](https://i.imgur.com/r0hH2nb.png)


콜아웃은 아래와 같은 문법을 사용해서 나타낼 수 있죠.
```
> [!note]
> aa
```

이렇게 편리한 콜아웃 문법을 블로그에서도 사용하면 좋지만, 이는 마크다운 표준 문법이 아닌 옵시디언만의 문법입니다.
때문에 옵시디언에서 콜아웃을 작성하더라도 블로그에서는 단지 `blockquote`로 파싱될 뿐입니다.
그래서 저는 이 문제를 해결하기 위해 [obsidian-callouts-markdown - npm](https://www.npmjs.com/package/obsidian-callouts-markdown?activeTab=readme) 라이브러리를 만들었습니다.
`MDXProvider` 혹은 `react-markdown`을 사용하는 React 기반 마크다운 블로그에서 `blockquote`로 파싱되는 컴포넌트를 해당 라이브러리의 컴포넌트로 대체하면 옵시디언의 콜아웃 문법으로 블로그 게시글을 작성할 수 있습니다.

>[!tip]
>자세한 라이브러리 사용법은 [obsidian-callouts-markdown - npm](https://www.npmjs.com/package/obsidian-callouts-markdown?activeTab=readme)의 설명을 확인해주세요!
>(참고로 이 콜아웃도 위의 라이브러리를 사용했습니다.)
# 마무리
Gatsby 블로그를 개설한 이후 최대 고민거리였던 게시글 작성 시 불편함을 드디어 해결해서 너무 뿌듯하네요! 아마 옵시디언의 존재를 조금만 늦게 알았다면 Velog나 Tistory 같은 블로그 서비스로 이사를 갔을 것 같습니다.
옵시디언은 알면 알수록 옵시디언의 한계가 어디일지 정말 궁금할 정도로 다양한 것들을 할 수 있습니다. 단, 너무도 자유로운 커스텀으로 인해 초기 진입장벽이 매우 높아서 선뜻 추천해 드리기는 어려운 프로그램이기도 합니다.
하지만 마크다운 블로그 작성만큼은 꼭 옵시디언으로 하라고 추천해 드리고 싶습니다. 개인 블로그를 운영하면서 게시글 작성에 불편함을 조금이라도 느껴보신 분이라면 이 글에 나온 설정대로 옵시디언 꼭 한번 사용해 보세요!
