<template>
    <div class="bg-Gray-dark">
        <div class="cursor-pointer">
            <h2 class=" text-Gray-black pl-9 pt-5 pb-4  font-bold cursor-pointer transition ease-in-out duration-150 text-xl"
                @click="activate(0)" :class="{ active: active_el == 0 }">
                <a href="#"> Description</a>
            </h2>
        </div>
        <div class="cursor-pointer">
            <h2
                class="text-Gray-black pl-9 pt-5 pb-4  font-bold cursor-pointer transition ease-in-out duration-150 text-xl">
                Points</h2>
        </div>
        <div class="flex items-center cursor-pointer pl-8 py-3">
            <div class="bg-white text-Gray-light box-border py-2 px-4 text-xl rounded-3xl ">
                1
            </div>
            <div>
                <p class="text-base text-Gray-black ml-6 mr-10 w-44">Abbesses Metro Station</p>
            </div>
        </div>
        <div class="flex items-center cursor-pointer pl-8 py-3">
            <div class="bg-white text-Gray-light box-border py-2 px-4 text-xl rounded-3xl ">
                2
            </div>
            <div>
                <p class="text-base text-Gray-black ml-6 mr-10 w-48">Pigalle and the Moulin R...</p>
            </div>
        </div>
        <div class="flex items-center cursor-pointer pl-8 py-3">
            <div class="bg-white text-Gray-light box-border py-2 px-4 text-xl rounded-3xl ">
                +
            </div>
            <div>
                <p class="text-Gray-black text-base  ml-6 mr-10 w-44">Create new point</p>
            </div>
        </div>
        <div class="cursor-pointer">
            <h2 class="text-Gray-black pl-9 pt-5 pb-4  font-bold cursor-pointer transition ease-in-out duration-150 text-xl"
                @click="activate(1)" :class="{ active: active_el == 1 }">
                <a href="#"> Media</a>
            </h2>
        </div>
        <div class="cursor-pointer">
            <h2 class="text-Gray-black pl-9 pt-5 pb-4  font-bold cursor-pointer transition ease-in-out duration-150 text-xl"
                @click="activate(2)" :class="{ active: active_el == 2 }">
                <a href="#">Setting</a>
            </h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navigation',
    data() {
        return {
            active_el: 0
        }
    },
    methods: {
        activate: function (el) {
            this.active_el = el;
        }
    }
}


</script>
<style scoped>
.active {
    border-bottom: 2px solid #2DAEE1;
    color: #373A3E;
    background-color: #fff;
}
</style>