<template>
  <div class="app-container">
    <!--    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />-->

    <!--    <el-tree-->
    <!--      ref="tree2"-->
    <!--      :data="data2"-->
    <!--      :props="defaultProps"-->
    <!--      :filter-node-method="filterNode"-->
    <!--      class="filter-tree"-->
    <!--      default-expand-all-->
    <!--    />-->
    <el-select v-model="value" placeholder="请选择" @change="Reshow">
      <el-option
        v-for="item in AllStockId"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
    <kline></kline>
  </div>
</template>

<script>
import { getAllStockId } from '../../api/table'
import Kline from './childcomponents/Kline'
import {getTableData} from '../../api/table'

export default {
  components: { Kline },
  data() {
    return {
      loading: true,
      AllStockId: null,
      value: null
      // filterText: '',
      // data2: [{
      //   id: 1,
      //   label: 'Level one 1',
      //   children: [{
      //     id: 4,
      //     label: 'Level two 1-1',
      //     children: [{
      //       id: 9,
      //       label: 'Level three 1-1-1'
      //     }, {
      //       id: 10,
      //       label: 'Level three 1-1-2'
      //     }]
      //   }]
      // }, {
      //   id: 2,
      //   label: 'Level one 2',
      //   children: [{
      //     id: 5,
      //     label: 'Level two 2-1'
      //   }, {
      //     id: 6,
      //     label: 'Level two 2-2'
      //   }]
      // }, {
      //   id: 3,
      //   label: 'Level one 3',
      //   children: [{
      //     id: 7,
      //     label: 'Level two 3-1'
      //   }, {
      //     id: 8,
      //     label: 'Level two 3-2'
      //   }]
      // }],
      // defaultProps: {
      //   children: 'children',
      //   label: 'label'
      // }
    }
  },
  created() {
    this.fetchData()
  },
  // watch: {
  //   filterText(val) {
  //     this.$refs.tree2.filter(val)
  //   }
  // },

  methods: {
    // filterNode(value, data) {
    //   if (!value) return true
    //   return data.label.indexOf(value) !== -1
    // }
    fetchData() {
      this.loading = true
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
      getAllStockId().then(res => {
        this.AllStockId = res
      })
    },
    Reshow() {
      console.log('success')
    },
    getKlinData(){

    }

  }
}
</script>

