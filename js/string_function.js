//export const capitalizeString = str => str.toUpperCase()

//OR

const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase()+ string.slice(1);
}

export {capitalizeString};

//to export varialbles

export const sportName = "Cricket";
export const bookName = " atomic habits";