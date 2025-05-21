import { create } from "zustand";

interface client {
    id: string,
    name: string
}

interface clientState {
    currentSelectedClient: client,
    clientAdded: boolean,

    clientIsAdded: (value: boolean) => void;
    selectCurrentClient: (client: client) => void
    getCurrentClient: () => client
}

const useClientStore = create<clientState>((set, get) => ({
    currentSelectedClient: {
        id: "",
        name: ""
    },
    clientAdded: true,
    selectCurrentClient: ({ id, name }) => set((state) => ({
        ...state,
        currentSelectedClient: {
            id: id,
            name: name
        }
    })),
    getCurrentClient: () => get().currentSelectedClient,
    clientIsAdded: (value: boolean) => set((state) => ({
        ...state,
        clientAdded: value
    }))
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
