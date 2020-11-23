import request from '@/utils/request'
import Myrequst from '@/utils/ToDataRequst'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getTableData(config) {
  return Myrequst.get({
    url: '/tableData',
    // params: {
    //   id: `sh600400.json`
    // }
    params: {
      id: config
    }
  })
}

export function getAllStockId() {
  return Myrequst.get({
    url: `/getAllStockId`
  })
}

export function getNameById(){
  return Myrequst.get({
    url:`/getNameById`,
  })
}
