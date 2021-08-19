import axios, {Method} from 'axios'

export const makeRequest = async (url: string, method: Method = "GET", body?: any) => {
  try{
    const response = await axios({
      method,
      url,
      data: body
    })

    return response.data
  } catch (error) {
    console.error(`An error occured while fetching data for url: '${url}`, error)
    return Promise.reject(error)
  }
}