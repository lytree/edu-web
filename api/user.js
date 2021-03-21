import http from './method'
// 获取手机验证码
export const getMobileCode = (params) => {
  return http().post('/user/common/user/send/code', params)
}
// 用户注册
export const register = (params={}) => {
  return http().post('/user/common/user/register', params)
}
// 用户登录
export const userLogin = (params={}) => {
  return http().post('/user/common/user/login/password', params)
}
// 用户信息
export const getUserInfo = (params={}) => {
  return http().post('/user/auth/user/ext/view', params)
}
// 课程详情
export const userCourseDetail = (params={}) => {
  return http().post('/course/auth/course/audit/view', params)
}
// 申请讲师
export const teacherEnter = (params={}) => {
  return http().post('/user/auth/lecturer/audit/save', params)
}
