import {create} from 'zustand';

interface State {
  showLogin: boolean;
  loggedIn: boolean;
  setAll: (data: Partial<State>) => void;
}

export const useAppStore = create<State>(set => ({
  showLogin: false,
  loggedIn: false,
  setAll: (data: Partial<Omit<State, 'setAll'>>) =>
    set(state => ({...state, ...data})),
}));
