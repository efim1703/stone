import Http from "~/services/classes/Http";

export default {
    getProjects: async (params) => {
        const { data } = await Http.post('/api/projects/get', params)
        return data
    },
    addProject: async (params, token) => {
        const { data } = await Http.post('/api/projects/add', params, {
            headers: {
                'authorization': `Bearer ${token}`
            },
        })
        return data
    },
}