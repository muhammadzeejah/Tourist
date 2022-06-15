<template>
  <div class="min-w-full">
    <HeaderVue />
    <div class="flex gap-20">
      <div class="w-72">
        <NavigationVue />
      </div>
      <div class="w-full flex">
        <div class="flex-1">

          <DescriptionDetailVue />
        </div>
        <div class="mx-14 mt-20">
          <div class="w-52">
            <CheckList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import NavigationVue from '@/components/Description/Navigation.vue'
import DescriptionDetailVue from '@/components/Description/DescriptionDetail.vue'
import CheckList from '@/components/CheckList/CheckList.vue'
export default {
  name: 'App',
  components: {
    HeaderVue,
    NavigationVue,
    DescriptionDetailVue,
    CheckList
  },

}
</script>