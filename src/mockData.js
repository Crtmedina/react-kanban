
import {v4 as uuidv4} from "uuid";

const mockData = [
    {
        id: uuidv4(),
        title: "📋 Por hacer",
        tasks:[
            {
                id: uuidv4(),
                title: "Estudiar JavaScript"
            },
            {
                id: uuidv4(),
                title: "Estudiar HTML + CSS"
            },
            {
                id: uuidv4(),
                title: "Estudiar AWWS"
            },
        ]
    },
    {
        id: uuidv4(),
        title: "📌 En progreso",
        tasks:[
            {
                id: uuidv4(),
                title: "Estudiar Java"
            },
            {
                id: uuidv4(),
                title: "Estudiar Python"
            },
            {
                id: uuidv4(),
                title: "Estudiar C++"
            },
        ]
    },
    {
        id: uuidv4(),
        title: "✔️ Completadas",
        tasks:[
            {
                id: uuidv4(),
                title: "Curso Html"
            },
        ]
    }
];

export default mockData;