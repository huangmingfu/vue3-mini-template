<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" :key="route.name" />
      </keep-alive>
      <component :is="Component" v-else :key="route.name" />
    </transition>
  </router-view>
</template>
