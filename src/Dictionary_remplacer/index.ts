function dictionaryRemplace(text: string, dictionary: {[key: string]: string}): string{
    let result: string = text;
    for (const key in dictionary){
        const value : string = dictionary[key];
        console.log(`Remplacement de ${key} par ${value}`);
        result = result.replace(`$${key}$`, value);
    }
    return result;
}

const dictionary = {
    temp: 'temporary',
    name: 'John Doe'};

const textl :string = "$temp$ here comes the name $name$";

console.log(dictionaryRemplace(textl, dictionary));