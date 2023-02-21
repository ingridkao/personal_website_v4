# personal_website_v4

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Setup
```bash
# npm
npm install
```

## Development Server
```bash
npm run dev
```
```bash
npx nuxi dev
```
Start the development server on http://localhost:3000

## Production
Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## DevDependencies
npm install -D @nuxtjs/tailwindcss

1. Tailwind CSS
    > 之前安裝tailwindcss原生有時會有讀取不到class的問題
    1. Install
        ```bash
        npm install -D @nuxtjs/tailwindcss
        ```
    2. Config ```nuxt.config.ts```
        ```bash
        export default defineNuxtConfig({
            modules: [
                '@nuxtjs/tailwindcss'
            ]
        })
        ```
    3. 設定擴充配置
        ```tailwind.config.js```
        ```assets/css/tailwind.css```
    
    4. 設定完畢後```npx nuxi dev```會出現提示
        Tailwind Viewer:```http://localhost:3000/_tailwind/```
        > 再開發的時候可以確認class的style
            詳細安裝細節可以參考(Ryan學習筆記)[https://ithelp.ithome.com.tw/articles/10294705]