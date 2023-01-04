export const state = () => ({
    favoritesList: [],
    animationCalculator: false
})

export const getters = {
    getAnimationCalculator(state) {
        return state.animationCalculator
    }
}

export const mutations = {
    setFavoritesList(state, newList) {
        state.favoritesList = newList
    },
    setAnimationCalculator(state, value) {
        state.animationCalculator = value
    },
}

export const actions = {
    addFavoriteMaterial({ state, commit }, newMaterial) {
        const newList = [...state.favoritesList]
        newList.push(newMaterial)

        commit('setFavoritesList', newList)

        commit('setAnimationCalculator', true)
    },
    removeFavoriteMaterial({ state, commit }, material) {
        const newList = state.favoritesList.filter(({id}) => id !== material.id)
        commit('setFavoritesList', newList)
    },
    offAnimationCalculator({ commit }) {
        commit('setAnimationCalculator', false)
    }
}