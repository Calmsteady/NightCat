export interface IUser {
  // 账号
  account: string
  // 密码
  password: string
  // 邮箱
  email: string
  // 是否订阅消息回复
  subscribe: boolean
  // 签名描述
  profile: string
  // 头像
  avatar: string
  // 注册时间
  created_at: Date
  // 更新时间
  update_at: Date
  // 个人网站地址
  website: string
  // github
  github: string
  // 位置
  location: string
  // 令牌
  access_token: string
  // 是否管理员
  admin: boolean
  // 是否超级管理员
  superAdmin: boolean
  // 是否重置密码
  resetPwd: boolean
}
