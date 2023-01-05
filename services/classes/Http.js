export default class Http {
    isInit = false
    constructor(axios) {
        if (this.isInit) return

        Http.get = axios.get
        Http.post = axios.post
        Http.put = axios.put
        Http.delete = axios.delete
    }
}