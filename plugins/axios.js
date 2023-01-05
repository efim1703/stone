import Http from "~/services/classes/Http";
import { stringify } from "qs"
export default function ({ $axios }) {
    $axios.setBaseURL('http://malire7m.beget.tech')
    $axios.onRequest(config => {
        config.paramsSerializer = params => stringify(params)
        return config
    })

    new Http($axios)
}