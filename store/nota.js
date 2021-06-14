export const state = () => ({
  list: []
});

export const mutations = {
  SET_LIST(state, notas) {
    state.list = notas;
  },
  ADD(state, nota) {
    state.list.push(nota);
  },
  SET(state, nota) {
    const notaFind = state.list.findIndex(n => n.id == nota.id);

    state.list[notaFind] = nota;
  }
};

export const actions = {
  async list({ commit }, usuarioId) {
    try {
      const { data } = await this.$axios.get(`notas/usuario/${usuarioId}`);

      commit("SET_LIST", data);

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async add({ commit }, nota) {
    try {
      const { data } = await this.$axios.post(`notas`, nota);

      commit("ADD", data);

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async edit({ commit }, nota) {
    try {
      console.log(nota)
      const { data } = await this.$axios.put(`notas/${nota.id}`, nota);

      commit("SET", data);

      return data;
    } catch (e) {
      console.log(e);
    }
  }
};