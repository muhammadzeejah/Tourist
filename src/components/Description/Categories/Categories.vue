<template>
    <div>
        <div class="pt-16 pb-5">
            <h2 class="font-bold text-xl text-Gray-black">Categories</h2>
        </div>
        <div class="grid grid-cols-6 gap-5">
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
        </div>
    </div>
</template>
<script>
import CategoriesBox from './CategoriesBox.vue'
export default {
    name: 'Categories',
    components: {
        CategoriesBox
    }
}
</script>
<style>
</style>