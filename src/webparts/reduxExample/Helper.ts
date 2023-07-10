export const isNullOrWhiteSpace = (str: string): boolean => {
    return undefined === str || null === str || (/^\s*$/g).test(str);
};

export const getQuerystring = (name: string): string | undefined => {
    const params = new URLSearchParams(window.location.search);

    let result = undefined;

    const n = name.toLowerCase();

    params.forEach((value, key) => {
        if (n === key.toLowerCase()) {
            result = value;
            return;
        }
    });
    return result;
};