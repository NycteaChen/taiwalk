import { getAuthorizationHeader } from './config'
const site = 'https://ptx.transportdata.tw/MOTC/v2/Tourism'

class Api {
  // 首頁取得資料
  static async getScenicSpot(num) {
    return await fetch(`${site}/ScenicSpot?$filter=contains(City%2C'')&$top=${num}&$format=JSON`, {
      headers: getAuthorizationHeader(),
    }).then(res => res.json())
  }

  static async getActivity(num) {
    return await fetch(`${site}/Activity?$filter=contains(City%2C'')&$top=${num}&$format=JSON`, {
      headers: getAuthorizationHeader(),
    }).then(res => res.json())
  }

  static async getRestaurant(num) {
    return await fetch(`${site}/Restaurant?$filter=contains(City%2C'')&$top=${num}&$format=JSON`, {
      headers: getAuthorizationHeader(),
    }).then(res => res.json())
  }

  //  取得該縣市資料
  static async getCityAll(category, city, num) {
    const cityURL = encodeURI(city)
    return await fetch(
      `${site}/${category}?$filter=contains(City%2C'${cityURL}')&$top=${num}&$format=JSON`,
      {
        headers: getAuthorizationHeader(),
      }
    ).then(res => res.json())
  }

  // 只用關鍵字搜尋
  static async getKeyWordData(category, word, num) {
    const wordURL = encodeURI(word)
    return await fetch(
      `${site}/${category}?$filter=contains(Name%2C'${wordURL}')&$top=${num}&$format=JSON`,
      {
        headers: getAuthorizationHeader(),
      }
    ).then(res => res.json())
  }
}

export default Api
