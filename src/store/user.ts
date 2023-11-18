import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IUserInfo } from '@/types';

export const useUserStore = defineStore('user', () => {
  const user = ref<IUserInfo>({
    name: 'Eduardo',
    email: 'xxxxxx@xxx.com',
  });

  const setUser = (newUser: IUserInfo) => {
    user.value = newUser;
  };

  return {
    user,
    setUser,
  };
});