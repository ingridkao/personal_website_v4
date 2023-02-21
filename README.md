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
    
    5. Darkmode依賴:```@nuxtjs/color-mode```

        1. 安裝
            ```bash
            npm install --save-dev @nuxtjs/color-mode
            ```
        
        2. Config ```nuxt.config.ts```
            ```bash
            export default defineNuxtConfig({
                buildModules: [
                    '@nuxtjs/color-mode'
                ]
            })
        3. 測試在vue中能不能被讀取
            ```html
                 <h1>Color mode: {{ $colorMode.value }}</h1>
            ```
            
        4. 安裝後碰到的問題
            出現```Property "$colorMode" was accessed during render but is not defined on instance.```
            我的解法是不要放在```buildModules```而是和```@nuxtjs/tailwindcss```放在一起
            ```bash
            export default defineNuxtConfig({
                modules: [
                    '@nuxtjs/color-mode',
                    '@nuxtjs/tailwindcss'
                ]
            })
            ```

        > (參考)[https://tailwindcss.nuxtjs.org/examples/dark-mode/]

