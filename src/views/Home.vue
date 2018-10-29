<template>
    <el-container class="home">
        <el-main>
            <img alt="Vue logo" src="../assets/logo.png">
            <HelloWorld />
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class Home extends Vue {}
</script>

<style scoped>
</style>