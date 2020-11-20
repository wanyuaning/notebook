```
[CLASS none cc]
<el-table :data="tableData" style="width: 100%" [b cg|v-loading="!tableData.length"]>
  <el-table-column prop="date" label="日期" width="180"> </el-table-column>
  <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
</el-table>

export default {
  data() {
    return {
      tableData: [
        {date: '2016-05-02', name: '王小虎'}
      ]
    }
  }
}
```
