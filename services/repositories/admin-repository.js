import Http from "~/services/classes/Http";

export default {
    login: async (params) => {
        const { data } = await Http.post('/api/login', params)
        return data
    }
}