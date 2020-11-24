<template>
  <div class="app-container">
    <div>
      <el-select v-model="value" placeholder="请选择" style="margin-bottom: 10px" @change="Reshow">
        <el-option
          v-for="item in IdAndName"
          :key="item['股票代码']"
          :label="item['股票名称']"
          :value="item['股票代码']+'.json'"
        />
      </el-select>
      <el-input
        v-model="search"
        style="width:200px;display: inline-block;float: right"
        size="large"
        placeholder="输入关键字搜索"
      />
    </div>
    <el-table
      v-loading="listLoading"
      :data="list.filter(data=> !search || data['交易日期'].toLowerCase().includes(search.toLowerCase()))"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      height="700"
    >
      <el-table-column align="center" label="股票代码" width="95">
        <template slot-scope="scope">
          {{ scope.row['股票代码'] }}
        </template>
      </el-table-column>
      <el-table-column label="股票名称" align="center">
        <template slot-scope="scope">
          {{ scope.row['股票名称'] }}
        </template>
      </el-table-column>
      <el-table-column label="交易日期" align="center">
        <template slot-scope="scope">
          {{ scope.row['交易日期'] }}
        </template>
      </el-table-column>
      <el-table-column label="前收盘价" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row['前收盘价'] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="开盘价" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row['开盘价'] }}
        </template>
      </el-table-column>
      <el-table-column label="成交量" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row['成交量'] }}
        </template>
      </el-table-column>
      <el-table-column label="成交额" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row['成交额'] }}
        </template>
      </el-table-column>
      <el-table-column label="收盘价" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row['收盘价'] }}
        </template>
      </el-table-column>
      <el-table-column label="最低价" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row['最低价'] }}
        </template>
      </el-table-column>
      <el-table-column label="最高价" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row['最高价'] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getNameById } from '@/api/table'
import { getTableData } from '@/api/table'


export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      value: null,
      IdAndName: [],
      search: null
    }
  },

  created() {
    this.fetchData()
  },
  methods: {
    Reshow() {
      getTableData(this.value).then(res => {
        this.list = res
        this.listLoading = false
      })
    },
    fetchData() {
      this.listLoading = true
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
      getTableData('sh600400.json').then(res => {
        this.list = res
        this.listLoading = false
      })
      getNameById().then(res => {
        this.IdAndName = res
      })
    }
  }
}
</script>
