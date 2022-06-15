<template>
  <div class="bg-white py-3 border-b-2">
    <div class="px-8">
      <!-- Desktop View -->
      <div class="flex items-center justify-between">
        <div>
          <router-link to="/">
            <img src="@/assets/css/Header/logo.png" width="170px" />
          </router-link>
        </div>
        <div class="hidden sm:flex sm:gap-12 sm:items-center">
          <a href="#" class="text-primary font-medium opacity-90 hover:text-secondary">Discover</a>
          <a href="#" class="text-primary font-medium opacity-90 hover:text-secondary">Create</a>
          <button
            class="bg-BG-lightGray text-white text-sm font-medium px-6 py-3 rounded-3xl hover:bg-secondary transition duration-300 ease-in-out">
            <a>Download</a>
          </button>
        </div>
        <div class="hidden sm:flex items-center gap-10">
          <router-link to="/">
            <img src="@/assets/css/Header/add-bookmark.png" width="17px">
          </router-link>
          <router-link to="/">
            <img src="@/assets/css/Header/notification-bell.png" width="22px">
          </router-link>
          <router-link to="/">
            <img src="@/assets/css/Header/avatar.png" width="35px">
          </router-link>
          <div class="sm:hidden cursor-pointer" @click="showTopMenu = !showTopMenu">
            <img src="@/assets/css/Header/hamburger-menu.png" width="20px">
          </div>
        </div>
      </div>
      <!-- Mobile View -->
      <!-- <div class="block sm:hidden bg-white border-t-2 py-2" :class="{ hidden: showTopMenu }">
        <div class="flex flex-col text-center mx-auto">
          <a href="#" class="text-primary font-semibold hover:text-secondary py-4">Discover</a>
          <a href="#" class="text-primary font-semibold hover:text-secondary py-4">Create</a>
          <button
            class="px-3 py-2 font-semibold bg-secondary text-white rounded-3xl hover:bg-white hover:text-primary border-solid border-2 border-secondary"><a>Download</a>
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // showTopMenu: false,
    }
  },
};
</script>
