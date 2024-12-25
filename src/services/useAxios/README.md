# 使用 useAxios 封装的请求（如不需要这种，将此文件夹删除）

## 安装

```bash
pnpm i @vueuse/integrations
```

## 官方使用示例

```vue
<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios'

const { data, isLoading, isFinished, execute, abort, isAborted } = useAxios(
  'https://jsonplaceholder.typicode.com/todos/1',
)
console.log(data.value)
</script>

<template>
  <button @click="execute()">
    Execute
  </button>
  <button @click="abort()">
    Abort
  </button>
  <note>Loading: {{ isLoading.toString() }}</note>
  <note>Finished: {{ isFinished.toString() }}</note>
  <note>Aborted: {{ isAborted.toString() }}</note>
</template>
```
