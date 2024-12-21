/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_BASE_PATH: string;
    readonly VITE_OUT_DIR: string;
    readonly VITE_APP_AUTO_UPDATE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
