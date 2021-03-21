import http from './method.js'
// 首页推荐课程
export const zoneCourse = (params={}) => {
  return http().post('/course/common/zone/course/list', params)
}
// 首页轮播图
export const advList = (params={}) => {
  return http().post('/course/common/adv/list', params)
}
// 关于我们列表
export const aboutList = (params={}) => {
  return http().post('/system/common/website/nav/list', params)
}
// 关于我们信息
export const aboutInfo = (params={}) => {
  return http().post('/system/common/website/nav/article/get', params)
}
// 客服信息
export const serviceInfo = (params={}) => {
  return http().post('/system/common/website/get', params)
}
// 友情链接
export const friendLink = (params={}) => {
  return http().post('/system/common/website/link', params)
}
// 导航条
export const getNav = (params={}) => {
  return http().post('/system/common/nav/bar/list', params)
}
// 轮播图分类
export const indexClass = (params={}) => {
  return http().post('/course/common/course/category/list', params)
}
// 招募内容
export const recruitInfo = (params={}) => {
  return http().post('/system/common/website/recruit/get', params)
}