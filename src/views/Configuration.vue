<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>미니 엑셀 설정</span>
      <el-button style="float: right; padding: 3px 0" type="text">저장</el-button>
    </div>
    <div class="text item">
      첫번째 행 강조<el-switch v-model="cfgHighlightFirstRow"></el-switch>
    </div>
  </el-card>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld
    }
  })
  export default class Configuration extends Vue {
    public cfgHighlightFirstRow = false;
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>