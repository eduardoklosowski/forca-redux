const initialState = {
  palavra: null,
  letras: [],
  vidas: 6,
  faltando: 0,
};

const calcFaltando = (palavra, letras) => {
  let faltando = palavra.length;
  let i;

  for (i = palavra.length; i--;) {
    if (letras.indexOf(palavra[i]) >= 0) {
      --faltando;
    }
  }

  return faltando;
};


// Actions

const setPalavra = (action) => {
  const palavra = action.palavra.trim().toLowerCase();

  return Object.assign({}, initialState, {
    palavra,
    faltando: palavra.length,
  });
};

const addLetra = (action, state) => {
  const letra = action.letra.slice(0, 1).toLowerCase();

  if (state.letras.indexOf(letra) >= 0) {
    return state;
  }

  const letras = state.letras.concat(letra);
  let vidas = state.vidas;
  let faltando = state.faltando;

  if (state.palavra.indexOf(letra) >= 0) {
    faltando = calcFaltando(state.palavra, letras);
  } else {
    vidas = vidas - 1;
  }

  return Object.assign({}, state, {
    letras,
    vidas,
    faltando,
  });
};


// Reduce

const forca = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PALAVRA':
      return setPalavra(action);
    case 'ADD_LETRA':
      return addLetra(action, state);
    default:
      return state;
  }
};

export default forca;
