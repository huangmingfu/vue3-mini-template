import { createApp } from 'vue';

import { setupGlobCom } from '@/plugins/setupGlobCom';
import '@/plugins/assets.ts';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';

import App from './App.vue';

const setupApp = async () => {
    // 创建Vue应用实例
    const app = createApp(App);

    // 配置并初始化路由
    await setupRouter(app);

    // 设置全局组件
    setupGlobCom(app);

    // 配置pinia状态管理
    setupStore(app);

    // 挂载Vue应用到DOM
    app.mount('#app');
};

setupApp();
