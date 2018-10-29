<template>
  <el-container class="share-excel">
    <el-main>
      <!--<el-select v-model="font" multiple filterable allow-create placeholder="선택하세용">
      <el-option v-for="item in fontList" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>-->
      <el-table :data="tdata" ref="share_table" :fit="true" size="mini" :show-header="false" :border="true">
        <el-table-column v-for="(e, key, i) in tdata[0]" :key="i" :prop="i.toString()" :resizable="true"></el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-input :rows="4" v-model="output" ref="table_html" readonly></el-input>
      <el-button type="primary" @click="downloadTableImage" icon="el-icon-download">이미지 다운로드</el-button>
      <el-button @click="copyTable" icon="el-icon-document">HTML 복사</el-button>
    </el-footer>
      
  </el-container>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import domtoimage from 'dom-to-image';

  @Component({
    components: {

    }
  })
  export default class ShareExcel extends Vue {
    @Prop({default: []})
    tdata: Array[object]
    
    @Prop({default: ''})
    thtml: string
    
    public font:string = '';
    public output:string = '';
    public fontList = [{
      value: 'Arial',
      label: 'Arial'
    }, {
      value: 'Times New Roman',
      label: 'Times New Roman'
    }, {
      value: 'Consolas',
      label: 'Consolas'
    }, {
      value: 'Helvetica',
      label: 'Helvetica'
    }, {
      value: '맑은 고딕',
      label: '맑은 고딕'
    }];
  

    public downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      link = null;;
    }
    
    public makeTableCode() {
      console.log(this.$refs.table_html);
      this.output = this.$refs.share_table.$el.getElementsByTagName('table')[0].outerHTML;
    }
    public copyTable() {
      this.makeTableCode();
      this.$refs.table_html.$el.firstElementChild.select();
      document.execCommand('copy');
      console.log(this.output);
      
      this.$notify({
        title: '복사 성공!',
        message: '표가 클립보드로 복사되었습니다.',
        type: 'success'
      });
    }
    public downloadTableImage() {
      domtoimage.toPng(this.$refs.share_table.$el.getElementsByTagName('table')[0])
        .then(dataUrl => {
          this.downloadURI(dataUrl, 'table.png');
        })
        .catch(error => {
          console.error('dom-to-image failed:', error);
        });
    }
    
    mounted() {
      this.makeTableCode();
    }
  
  }
  
</script>

<style scoped>
  .el-table {
    justify-content: center;
    resize: both;
  }
</style>