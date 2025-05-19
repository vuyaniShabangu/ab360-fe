import { create } from "zustand";
import { persist } from 'zustand/middleware'


interface project {
    id: string,
    name: string
}

interface projectState {
    currentSelectedProject: project,
    selectCurrentProject: (project: project) => void,
    getCurrentProject: () => project
}

// const useProjectStore = create<projectState>()(
//     persist(
//         ((set, get) => ({
//             currentSelectedProject: {
//                 id: "",
//                 name: ""
//             },
//             selectCurrentProject: ({ id, name }) => set((state) => ({
//                 ...state,
//                 currentSelectedProject: {
//                     id,
//                     name
//                 }
//             })),
//             getCurrentProject: () => get().currentSelectedProject
//         })),
//         {
//             name: "current-project"
//         }
//     )
// )

const useProjectStore = create<projectState>((set, get) => ({
    currentSelectedProject: {
        id: "",
        name: ""
    },
    selectCurrentProject: ({ id, name }) => set((state) => ({
        ...state,
        currentSelectedProject: {
            id: id,
            name: name
        }
    })),
    getCurrentProject: () => get().currentSelectedProject
}))

export default useProjectStore;