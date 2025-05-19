import { create } from "zustand";
import { persist } from 'zustand/middleware'

interface client {
    id: string,
    name: string
}

interface clientState {
    currentSelectedClient: client,
    selectCurrentClient: (client: client) => void
    getCurrentClient: () => client
}

const useClientStore = create<clientState>((set, get) => ({
    currentSelectedClient: {
        id: "",
        name: ""
    },
    selectCurrentClient: ({ id, name }) => set((state) => ({
        ...state,
        currentSelectedClient: {
            id: id,
            name: name
        }
    })),
    getCurrentClient: () => get().currentSelectedClient
}))

// const useClientStore = create<clientState>()(
//     persist(
//         ((set, get) => ({
//             currentSelectedClient: {
//                 id: "",
//                 name: ""
//             },
//             selectCurrentClient: ({ id, name }) => set((state) => ({
//                 ...state,
//                 currentSelectedClient: {
//                     id: id,
//                     name: name
//                 }
//             })),
//             getCurrentClient: () => get().currentSelectedClient
//         })),
//         {
//             name: "current-client"
//         }
//     )
// )

export default useClientStore;
