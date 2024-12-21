<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <keep-alive>
        <component
          :is="Component"
          v-if="route.meta.keepAlive"
          :key="route.name"
        />
      </keep-alive>
    </transition>
    <transition :name="route.meta.transition || 'fade'">
      <component
        :is="Component"
        v-if="!route.meta.keepAlive"
        :key="route.name"
      />
    </transition>
  </router-view>
</template>
