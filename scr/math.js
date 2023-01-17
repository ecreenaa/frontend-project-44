export const numbers = (min = 1, max = 100) => {
    const minimal = Math.ceil(min);
    const maximum = Math.floor(max);
    const randomNamber = Math.floor(Math.random() * (maximum - minimal)) + minimal;
    return randomNamber;

};