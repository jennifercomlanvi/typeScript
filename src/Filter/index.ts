import * as fs from "fs";
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

function readJsonFile<T>(filePath: string): T[] {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data) as T[];
    } catch (error) {
        console.error(`Erreur lors de la lecture du fichier JSON : ${error}`);
        return [];
    }
}
function filterObjects<T>(users: T[],criteria:Partial<T>):T[] {
    if (Object.keys(criteria).length === 0) {
        console.log("Filter : Aucun critère fourni.");
        return users;
    }
    let queryLog = Object.entries(criteria)
        .map(([key, value]) => `"${key}" = "${value}"`)
        .join(" AND ");
    
    // Log de la requête WHERE
    console.log(`Filter : WHERE ${queryLog}`);
    return users.filter(item => {
        return Object.entries(criteria).every(([key,value]) => {
            return item[key as keyof T] === value;
        });
    })
}

//Test source de données RAM
const users: User[] = [
    { id: 1, name: "John", email: "john@example.com", age: 30 },
    { id: 2, name: "Jane", email: "jane@example.com", age: 25 },
    { id: 3, name: "Mark", email: "mark@example.com", age: 28 },
    { id: 4, name: "Emily", email: "emily@example.com", age: 32 },
];
//Test source de données un fichier JSON
const datas = readJsonFile("src/Filter/data.json")
console.log(filterObjects(datas, { name: "John Doe", age: 30 }));
// console.log(filterObjects(datas, { name: "John Doe", age: 30 }));
// console.log(filterObjects(users, { name: "John", age: 30 }));