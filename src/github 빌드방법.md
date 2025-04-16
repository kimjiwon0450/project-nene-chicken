
# Vite + React 프로젝트 GitHub Pages에 배포하는 방법

## 1. 배포용 github repository 만들기

- 배포 전용 github repository를 하나 생성합니다.
- 조원 중 아무나 한 명만 대표로 생성하면 됩니다.
- 이름 또한 뭐든 좋습니다. 예제에서는 test-github-page 라고 칭하겠습니다.

## 2. vite.config.js 수정

- base는 GitHub Pages에서 배포될 경로를 의미합니다.
- url 경로가 깃허브 레포지토리 이름으로 시작하기 때문에, 제작하신 페이지들이 기본 베이스 url을 레포지토리 이름으로 가져간다는 것을 의미해요.

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/리포지토리이름/', // 꼭 수정할 것! 예: base: '/test-github-page/'
});
```

## 2-1. 이미지 경로 살펴보기

- 이미지 같은 경우 public 정적 폴더에서 직접 경로를 지목하는 경우가 있고, src폴더 안에 assets에 넣어놓고 import로 불러오는 경우가 있을 것입니다.
- 프로젝트의 모든 이미지가 src/assets 에서 import로 가져온다면 따로 건드릴 필요가 없습니다.
- 만약 public 폴더에서 가져오는 것이 있다면 이렇게 바꿔 주세요.

```jsx
// github pages를 사용하면 base url이 바뀝니다.
// 직접 지목해도 되지만, vite.config.js에 등록된 base url을 경로 앞에 붙여서 파일 경로를 정확하게 명시하는 것입니다.
<img src={`${import.meta.env.BASE_URL}logo.png`} />
```

## 2-2. 라우터 경로 확인하기

- 라우터 또한 라우터 앞에 base url이 붙어야만 정상적으로 경로를 인식해서 컴포넌트를 렌더링 할 수 있습니다.
- 라우팅 설정 파일로 이동하세요.
- 라우터 등록 코드를 다음과 같이 바꿉니다. (맨 아래 보세요!!)
- router의 basename을 본인들의 레포지토리 이름을 깔아줄 수 있도록 설정해 주세요.

```jsx
// 라우터 설정
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, // 부모 경로가 활성화 되었을 때 기본으로 사용할 컴포넌트
          element: <IndexPage />,
        },
        {
          path: 'blog',
          element: <BlogPage />,
        },
        {
          // :postId -> 경로에 붙는 파라미터 (/blog/1, /blog/7)
          path: 'blog/:postId',
          element: <BlogPostDetail />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
      ],
    },
  ],
  {
    basename: '/test-github-page',
  },
);
```

## 3. gh-pages 설치

- 여러분들의 react 프로젝트를 좀 더 쉽게 github pages에서 사용할 수 있게 도와주는 라이브러리를 npm에서 설치합니다.
- 설치가 완료되면 package.json에 잘 추가되었는지도 확인해 주세요.

```bash
npm install --save-dev gh-pages
```

## 4. package.json 확인

- 방금 설치한 gh-pages 라이브러리가 잘 추가되었는 지 확인하세요.
- scripts쪽에 deploy라고 key를 추가하시고, "gh-pages -d dist" 라고 추가해 주세요.
- deploy 라는 명령어를 만든 겁니다.
- gh-pages가 여러분들의 레포지토리에 dist라는 폴더를 push 해 줄 겁니다. (remote가 deploy라는 이름으로 등록된 저장소에)

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist -r deploy"
  },
  "dependencies": {
    "gh-pages": "^6.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.5.0",
    "sass": "^1.86.3"
  },
```

## 5. Github 저장소에 코드 push

```bash
# 배포 전용 레포지토리를 deploy라는 이름으로 등록
# github pages 용도로 새로 생성한 저장소를 추가!
git remote add deploy https://github.com/본인계정/리포지토리이름.git
git add .
git commit -m "배포 준비"
git push deploy main
```

## 6. 프로젝트 빌드 & 배포

```bash
npm run build
npm run deploy
```

## 7. Github Pages 설정

1. GitHub 저장소 > Settings > Pages 메뉴로 이동

2. Branch를 gh-pages로 선택하고 / (root) 선택

3. 저장 > 페이지 주소 확인

배포된 사이트 주소는
https://본인계정.github.io/리포지토리이름/
이런 형식으로 브라우저를 열어서 확인할 수 있습니다! <br>

ex) https://leekm321.github.io/test-github-page/

## 8. 마지막 언급 사항

- github pages를 이용해서 배포를 한 후에 변경사항이 생겼다면 로컬에서 변경을 하시고 다시 빌드, 배포해야 합니다.
- 코드를 수정한 후에 빌드와 배포 스크립트를 순서대로 불러 줍니다.

```bash
npm run build
npm run deploy
```

- 직접 코드를 push할 필요는 없습니다. gh-pages 라이브러리가 알아서 빌드된 내용을 gh-pages 브랜치로 업로드 합니다.
- 물론 개발 코드 같은 경우에는 origin으로 직접 push가 필요합니다!
