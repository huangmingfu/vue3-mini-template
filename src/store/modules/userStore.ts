import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

type TUserInfo = {
  name: string;
  avatar: string;
  token: string;
};

function setupStore() {
  /** state */
  const userInfo = ref<TUserInfo>();

  /** actions */
  const setUserInfo = (info: TUserInfo) => {
    userInfo.value = info;
  };
  const clearUserInfo = () => {
    userInfo.value = undefined;
  };

  /** getters */
  const isLogin = computed(() => !!userInfo.value);

  return { userInfo, clearUserInfo, setUserInfo, isLogin };
}

export const useUserStore = defineStore('app-user', setupStore, { persist: true });
