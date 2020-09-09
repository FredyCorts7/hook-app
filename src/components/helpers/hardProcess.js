export const hardProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('run..');
  }
  return `${iterations} done iterations`;
};
