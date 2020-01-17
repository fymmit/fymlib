const map = (func, array) => {
    const result = [...array];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        result[i] = func(element, i, array);
    }
    return result;
};

export default map;
