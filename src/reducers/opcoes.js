const initialState = {
  escondePalavra: true,
};

const opcoes = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ESCONDE_PALAVRA':
      return Object.assign({}, state, {
        escondePalavra: !state.escondePalavra,
      });
    default:
      return state;
  }
};

export default opcoes;
