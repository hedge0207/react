import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";

// asset-manifest.json에서 파일 경로들을 조회한다.
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

// static/js/2.48cb853b.chunk.js 파일은 해시 값(이 경우 48cb853b)이 매번 변경되기 때문에 아래와 같이 key를 찾아줘야 한다.
// 나머지 파일들은 그냥 오브젝트에 접근하듯이 접근하면 된다(e.g. main.css의 value에 접근하려면 manifest.files['main.css']로 접근한다).
const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 키를 찾아서
  .map((key) => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
  .join(""); // 합친다.

function createPage(root) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <title>React App</title>
      <link href="${manifest.files["main.css"]}" rel="stylesheet" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${root}
      </div>
      <script src="${manifest.files["runtime-main.js"]}"></script>
      ${chunks}
      <script src="${manifest.files["main.js"]}"></script>
    </body>
    </html>
      `;
}

const app = express();

const serverRender = async (req, res, next) => {
  const context = {};

  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(createPage(root)); // 클라이언트에게 결과물을 응답한다.
};

const serve = express.static(path.resolve("./build"), {
  index: false,
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
