<template>
  <div class="app-container">
    <el-select v-model="value" placeholder="请选择" @change="Reshow">
      <el-option
        v-for="item in IdAndName"
        :key="item['股票代码']"
        :label="item['股票名称']"
        :value="item['股票代码']+'.json'"
      />
    </el-select>
    <el-table
      v-loading="listLoading"
      :data="list"
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
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getList, getNameById} from '@/api/table'
import { getTableData } from '@/api/table'
import { getAllStockId } from '@/api/table'

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
      IdAndName:[]
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
      getNameById().then(res=>{
        this.IdAndName=res;
      })
    }
  }
}
</script>
