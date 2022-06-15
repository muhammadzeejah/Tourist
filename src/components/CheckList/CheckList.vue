<template>
    <div class="px-5 py-4 border rounded-lg shadow-md">
        <div>
            <h2 class="text-Gray-black font-bold text-xl">Check List</h2>
        </div>
        <div>
            <CheckListBox name="Name" />
            <CheckListBox name="Description" />
            <CheckListBox name="Cover Photo" />
            <CheckListBox name="Atleast 1 Photo" />
            <div class=" mt-4">
                <p class="text-Gray-black text-base font-medium opacity-70">Narration</p>
            </div>
            <div class=" mt-4">
                <p class="text-Gray-black text-base font-medium opacity-70">Media</p>
            </div>
            <div class="flex flex-col ">
                <div class="mt-6">
                    <button
                        class="text-secondary   w-full  box-border border-2 border-sky-blue py-2 px-12 rounded-3xl text-lg"><a>Preview</a></button>
                </div>
                <div class="mt-2">
                    <button class="text-white bg-secondary w-full  py-2 px-12 rounded-3xl text-lg"><a>Publish</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CheckListBox from './CheckListBox.vue'
export default {
    name: 'CheckList',
    components: {
        CheckListBox
    },
}
</script>
<style>
</style>