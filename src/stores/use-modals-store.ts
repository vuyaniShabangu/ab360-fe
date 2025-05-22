import { create } from "zustand"

interface modalsStore {
    projectreateOpen: boolean,
    clientCreateOpen: boolean,
    changeProjectCreateOpen: (value: boolean) => void,
    changeClientCreateOpen: (value: boolean) => void
}

const useCreationModalsStore = create<modalsStore>((set) => ({
    projectreateOpen: false,
    clientCreateOpen: false,
    changeClientCreateOpen: () => set((state) => ({
        clientCreateOpen: !state.clientCreateOpen
    })),
    changeProjectCreateOpen: () => set((state) => ({
        projectreateOpen: !state.projectreateOpen
    }))
}))

export default useCreationModalsStore;