export const state = () => {
    list: []
}

export const mutations = {
    SET_LIST(state, notas) {
        state.list = notas;
    },
    ADD(state, nota) {
        state.list.push(nota);
    }
}

export const actions = {
    async list({ commit }, usuarioId) {
        try {
            const { data } = await this.$axios.get(`notas/usuario/${usuarioId}`)

            commit("SET_LIST", data);

            return data;
        } catch (e) {
            console.log(e);
        }
    },
    async add({ commit }, nota){
        const { data } = await this.$axios.post(`notas`, nota);

        commit("ADD", nota);

        return data;
    }
}

 

