const initialState = {
  palavra: null,
  palavraLimpa: null,
  letras: [],
  vidas: 6,
  faltando: 0,
};

const removeAcentuacao = (palavra) => {
  const normalizada = palavra.normalize('NFKD');
  const limpa = [];
  const len = normalizada.length;
  let i;

  for (i = 0; i < len; ++i) {
    if (normalizada.charCodeAt(i) < 128) {
      limpa.push(normalizada.charAt(i));
    }
  }

  return limpa.join('');
};

const lengthWithoutSpaces = (palavra) => (
  palavra.replace(/\s+/g, '').length
);

const calcFaltando = (palavra, letras) => {
  let faltando = palavra.length;
  let i;
  let letra;

  for (i = palavra.length; i--;) {
    letra = palavra[i];
    if (letra === ' ' || letras.indexOf(letra) >= 0) {
      --faltando;
    }
  }

  return faltando;
};


// Actions

const setPalavra = (action) => {
  const palavra = action.palavra.trim().toLowerCase().replace(/\s+/g, ' ');

  return Object.assign({}, initialState, {
    palavra,
    palavraLimpa: removeAcentuacao(palavra),
    faltando: lengthWithoutSpaces(palavra),
  });
};

const addLetra = (action, state) => {
  const letra = removeAcentuacao(action.letra.slice(0, 1).toLowerCase());

  if (state.letras.indexOf(letra) >= 0) {
    return state;
  }

  const letras = state.letras.concat(letra);
  let vidas = state.vidas;
  let faltando = state.faltando;

  if (state.palavraLimpa.indexOf(letra) >= 0) {
    faltando = calcFaltando(state.palavraLimpa, letras);
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
