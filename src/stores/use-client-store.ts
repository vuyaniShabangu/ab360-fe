import { create } from "zustand";

interface project {
  id: string;
  name: string;
}

interface client {
    id: string,
    name: string,
    projects: project[]
}

interface clientState {
    currentSelectedClient: client,
    clientAdded: boolean,
    
    clientIsAdded: () => void;
    selectCurrentClient: (client: client) => void
    getCurrentClient: () => client
}

const useClientStore = create<clientState>((set, get) => ({
    currentSelectedClient: {
        id: "",
        name: "",
        projects: []
    },
    selectCurrentClient: ({ id, name, projects }) => set((state) => ({
        ...state,
        currentSelectedClient: {
            id: id,
            name: name,
            projects: projects
        }
    })),
    getCurrentClient: () => get().currentSelectedClient,
    clientAdded: false,
    clientIsAdded: () => set((state) => ({
        ...state,
        clientAdded: !state.clientAdded
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
