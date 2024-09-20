import {create} from 'zustand';

interface State {
  showLogin: boolean;
  setAll: (data: Partial<State>) => void;
}

export const useAppStore = create<State>(set => ({
  showLogin: false,
  setAll: (data: Partial<Omit<State, 'setAll'>>) =>
    set(state => ({...state, ...data})),
}));
