<template>

  <el-container id="app">
    <el-header class="header">
      <div id="nav">
        <el-row>
          <el-col :span="2" style="background-color: green;">
            <strong style="font-size: 30px; color: white !important;">X</strong>
          </el-col>
          <el-col :span="18">
            <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal">
              <el-menu-item index="main">Mini Excel</el-menu-item>

            </el-menu>
          </el-col>
          <el-col :span="4">
            <el-button type="danger" icon="el-icon-delete" v-show="true" @click="showResetDialog" :disabled="!isExcelMode" circle></el-button>
            <el-button type="primary" icon="el-icon-share" @click="share" v-show="true" :disabled="!isExcelMode" round>공유하기</el-button>
          </el-col>
        </el-row>
      </div>

    </el-header>
    <main-component ref="main"></main-component>
    <el-dialog
               title="공유하기"
               :visible.sync="dialogVisible"
               width="90%">
      <share-excel ref="share_excel" :tdata="parsedData" :thtml="parsedHTMLData"></share-excel>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" icon="el-icon-close">닫기</el-button>
      </span>
    </el-dialog>
    <el-dialog
               title="표 초기화"
               :visible.sync="resetDialogVisible"
               width="400px">
      정말로 초기화 하시겠습니까?
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetDialogVisible = false">취소</el-button>
        <el-button type="danger" @click="resetPage" icon="el-icon-delete">초기화</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MainComponent from "./views/Main.vue";
  import ShareExcel from "./views/ShareExcel.vue";
  @Component({
    components: {
      MainComponent, ShareExcel
    }
  })
  export default class App extends Vue {
    
    public activePage:string = "main";
    public parsedData = [];
    public parsedHTMLData = '';

  /*
  handleSelect(key:string, keyPath:string) {
    this.$router.replace("/"+key);
  }
  */
  public dialogVisible = false;
  share() {
    if (this.$refs.main.excelPasted === false) {
      return;
    }
    this.parsedData = this.$refs.main.settings.data.map(e => Object.assign({}, e));
    //this.parsedHTMLData = this.$refs.share_excel;
    //console.log(this.parsedHTMLData);
    this.dialogVisible = true;
    console.log(this.$refs.main.settings.data);
    console.log(this.parsedData);
  }
  
  public resetDialogVisible = false;
  
  resetPage() {
    this.$refs.main.excelInput = '';
    this.$refs.main.excelPasted = false;
    this.resetDialogVisible = false;
  }
  
 
  showResetDialog() {
    if (this.$refs.main.excelPasted === false) {
      return;
    }
    this.resetDialogVisible = true;
  }
  
  public isExcelMode = false;
  
  
  
  detectExcelMode() {
    if (this.$refs.main === undefined) {
      return;
    }
    else {
      this.isExcelMode = this.$refs.main.excelPasted;
    }
  }
  
  mounted() {
    setInterval(this.detectExcelMode, 500);
  }
  
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, '맑은 고딕', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-main {
    color: #333;
    text-align: center;
  }

  .el-menu-item {
    font-family: 'Segoe UI', Arial;
    font-size: 28px !important;
    font-weight: 400;
    letter-spacing: -0.5px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
