import request from '@/utils/request'
// import { data } from 'autoprefixer'

export function login(data) {
  return request({
    url: '/tankinfo-admin/admin/login',
    method: 'post',
    data: data
  })
}

export function getInfo() {
  return request({
    url: '/tankinfo-admin/admin/currentUser',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/tankinfo-admin/admin/logout',
    method: 'post'
  })
}
