<template>
    <div>
        <div class="flex justify-between mt-4">
            <p class="text-Gray-black text-base font-medium">{{ name }}</p>
            <div class="w-5 ">
                <img src="@/assets/css/Description/plus-48.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CheckListBox',
    props: {
        name: {
            type: String,
            required: true
        }
    },
}
</script>
<style>
</style>