export const capitalize = (text) => {
    if (text === '') {
      return '';
    }
    const [firstSymbol, ...restSymbols] = text;
    return `${firstSymbol.toUpperCase()}${restSymbols.join('')}`;
  };