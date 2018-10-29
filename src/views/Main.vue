<template>
  <el-container class="main">
    <el-main>
      <el-card v-if="!excelPasted" shadow="always">
        <div style="border: 12px dashed #eee;">
          <i id="bouncy" class="el-icon-document" style="font-size: 256px; color: #eee; margin-top: 110px; margin-bottom: 40px;"></i>
          <p style="color: #eee; font-size: 40px; font-weight: 600;">여기에 엑셀 데이터 붙여넣기 (Ctrl + V)</p>
        </div>
        
      </el-card>
      <div v-else>
        <HotTable id="hot-preview" :settings="settings"></HotTable>
        <!--<el-table :data="excelData">
          <el-table-column v-for="(col, index) in excelHeader" :prop="col" :label="col"></el-table-column>
        </el-table>-->
      </div>
    </el-main>
    <textarea id="excel_input" @keyup.ctrl.86.exact="handlePaste" v-model="excelInput" v-if="!excelPasted"></textarea>
  </el-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { HotTable } from '@handsontable/vue';

  @Component({
    components: {
      HotTable
    }
  })
  export default class Main extends Vue {
    public settings = {
      data: [],
      colHeaders: true,
      rowHeaders: true,
      contextMenu: true
    };
    public excelInput:string = '';
    public excelPasted = false;
    handlePaste() {
      const input = this.excelInput.trimRight().split('\n').map(e => e.split('\t'));
      this.settings.data = input;
      console.log(input);
      this.excelPasted = true;
    }
  }
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
<style scoped>
  #hot-preview {
    width: 100%;
    height: 800px;
    overflow: hidden;
  }
  #excel_input {
    cursor: default;
    background: transparent;
    color: white;
    resize: none;
    border: 0 none;
    width: 100%;
    font-size: 1px;
    outline: none;
    height: 100%;
    position: absolute;
  }
  #bouncy {
    animation: 0.35s ease-in 0s infinite alternate bounce;
  }
  @keyframes bounce {
    100% {
      margin-top: 140px;
      margin-bottom: 10px;
    }
  }
</style>