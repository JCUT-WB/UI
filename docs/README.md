# 快速开始

#### 安装组件库
````bash
npm i 2-1.demo
````
#### 使用组件库
> 在main.js中引用组件库

````javascript
    //全部引入
    import '2-1.demo/dist/css/index.css';
    import MUI from '2-1.demo';
    VUe.use(MUI);

    //按需引用
    import '2-1.demo/dist/css/index.css';
    import { Demo } from '2-1.demo';
    Vue.use(Demo);
````