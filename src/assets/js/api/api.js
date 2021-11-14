import { getAuthorizationHeader } from './config'
const site = 'https://ptx.transportdata.tw/MOTC/v2/Tourism'

class Api {
  static async getScenicSpot(num) {
    return await fetch(`${site}/ScenicSpot?$top=${num}&$format=JSON`, {
      headers: getAuthorizationHeader(),
    }).then(res => res.json())
  }

  static async getActivity(num) {
    return await fetch(`${site}/Activity?$top=${num}&$format=JSON`, {
      headers: getAuthorizationHeader(),
    }).then(res => res.json())
  }

  static async getRestaurant(num) {
    return await fetch(`${site}/Restaurant?$top=${num}&$format=JSON`, {
      headers: getAuthorizationHeader(),
    }).then(res => res.json())
  }
}

export default Api
