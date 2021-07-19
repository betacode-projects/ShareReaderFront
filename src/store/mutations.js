const mutations = {
  changeTrueLoginMode (state) {
    state.loginMode = true
  },
  changeFalseLoginMode (state) {
    state.loginMode = false
  },
  changeFalseQrModalMode (state) {
    state.qrModalMode = false
  },
  changeTrueQrModalMode (state) {
    state.qrModalMode = true
  }
}

export default mutations
