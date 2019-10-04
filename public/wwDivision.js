onmessage = evt => {
  postMessage(`El cociente es de ${evt.data.dividendo/evt.data.divisor}`);
};
