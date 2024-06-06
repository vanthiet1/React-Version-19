 Ban đầu cài:  npm i react@rc react-dom@rc

<!-- chỉnh và thêm trong package.json  -->

<!-- nếu như dùng tsc bỏ overrides vào trong package.json -->
  "overrides": {
    "@types/react": "npm:types-react@rc",
    "@types/react-dom": "npm:types-react-dom@rc"
   },
    "devDependencies": {
    "@types/react": "npm:types-react@rc",
    "@types/react-dom": "npm:types-react-dom@rc",
    }
 "@types/react-dom": "npm:types-react-dom@rc"
 <!-- tiếp theo -->
 <!-- cài react compiler -->
 npm install babel-plugin-react-compiler

 <!-- chỉnh lại vite config -->
   react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
   })

   <!-- link doc cài react compiler -->
   https://react.dev/learn/react-compiler