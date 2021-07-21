const mutations = {
  changeTrueLoginMode (state) {
    state.loginMode = true
  },
  changeFalseLoginMode (state) {
    state.loginMode = false
  },
  changeTrueQrModalMode (state) {
    state.qrModalMode = true
  },
  changeFalseQrModalMode (state) {
    state.qrModalMode = false
  }
}

export default mutations
