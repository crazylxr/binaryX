# binaryX

处理 JavaScript 二进制的数据，支持 Blob、ArrayBuffer、File、Base64 之间的互转

[![NPM version](https://img.shields.io/npm/v/binaryX.svg?style=flat)](https://npmjs.com/package/binaryX)
[![NPM downloads](http://img.shields.io/npm/dm/binaryX.svg?style=flat)](https://npmjs.com/package/binaryX)

## 功能

- 将 `ArrayBuffer` 转换为 `Blob`
- 将 `Blob` 转换为 `ArrayBuffer`
- 将 `ArrayBuffer` 转换为 Base64 编码字符串
- 将 Base64 编码字符串转换为 `ArrayBuffer`
- 将 `Blob` 转换为 Base64 编码字符串
- 将 Base64 编码字符串转换为 `Blob`
- 将 Blob 转换为 File
- 将 File 转换为 Blob

## 安装

你可以通过 npm 或 yarn 或 pnpm 安装 `binaryX`：

```bash
npm install binaryX
# 或者
yarn add binaryX
# 或者
pnpm add binaryX
```

## 使用方法

首先，导入你需要的函数：

```typescript
import {
  arrayBufferToBlob,
  blobToArrayBuffer,
  arrayBufferToBase64,
  base64ToArrayBuffer,
  blobToBase64,
  base64ToBlob,
  blobToFile,
  fileToBlob,
} from 'binaryX'
```

然后，使用这些函数来处理你的二进制数据：

```typescript
// 创建 ArrayBuffer
const buffer = new ArrayBuffer(16)

// ArrayBuffer 转换为 Blob
const blob = arrayBufferToBlob(buffer)

// Blob 转换为 ArrayBuffer
;(async () => {
  const arrayBuffer = await blobToArrayBuffer(blob)
  console.log(arrayBuffer)
})()

// ArrayBuffer 转换为 Base64
const base64String = arrayBufferToBase64(buffer)
console.log(base64String)

// Base64 转换为 ArrayBuffer
const decodedArrayBuffer = base64ToArrayBuffer(base64String)
console.log(decodedArrayBuffer)

// Blob 转换为 Base64
;(async () => {
  const base64String = await blobToBase64(blob)
  console.log(base64String)
})()

// Base64 转换为 Blob
const newBlob = base64ToBlob(base64String, 'image/png')
console.log(newBlob)

// Blob 转换为 File
const file = blobToFile(blob, 'example.txt');
console.log(file);

// File 转换为 Blob
const fileBlob = fileToBlob(file);
console.log(fileBlob);
```

## 贡献

如果你有任何建议或想要贡献代码，请提交 Pull Request 或创建 Issue。
