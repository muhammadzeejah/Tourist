<template>
    <div>
        <div class="flex justify-between mt-6 mb-8">
            <div class="flex items-center gap-3">
                <p class="text-Gray-black text-sm pb-3  active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(0)" :class="{ active: active_el == 0 }">English</p>
                <p class="text-Gray-black text-sm  pb-3  active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(1)" :class="{ active: active_el == 1 }">French</p>
                <p class="text-Gray-black text-sm pb-3   active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(2)" :class="{ active: active_el == 2 }">Deutch</p>
                <p class="text-Gray-black text-sm  pb-3  active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(3)" :class="{ active: active_el == 3 }">Spanish</p>
            </div>
            <div>
                <button
                    class="text-Gray-light hover:text-white border-sky-blue hover:border-secondary hover:bg-secondary border-solid border-2  py-2 px-6 text-sm rounded-3xl "><a>+
                        Add...</a></button>
            </div>
        </div>
        <div class="mb-10">
            <img src="@/assets/css/Description/landscape.jpg" class="w-full h-56 rounded-xl" alt="" />
        </div>
        <div>
            <h1 class="text-d-hero text-4xl  font-bold mb-9">
                A walking trail of Montmartre, Paris
            </h1>
        </div>
        <div class="text-primary text-lg leading-8 mb-4">
            <p>Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the leafy hilltop village of
                Montmartre was once the play area of Paris’s most famous artists, bohemians and creatures of the night.
                These days, the winding cobbled streets host chic cafes, retro boutiques and fine French dining but, if
                you look closely enough, those in search of historical secrets can still find traces of the old La
                Bohème hidden between the tourist traps…</p>
        </div>
        <TagsVue />
        <Categories />
    </div>
</template>
<script>
import TagsVue from './Tags.vue';
import Categories from './Categories/Categories.vue';
export default {
    name: 'DescriptionDetail',
    components: {
        TagsVue,
        Categories
    },
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
<style>
.active {
    border-bottom: 1px solid #2DAEE1;
    color: #2DAEE1;

}

.heroImg {
    mask-image: linear-gradient(to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.65) 20%);
    -webkit-mask-image: linear-gradient(to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.65) 30%);
}
</style>