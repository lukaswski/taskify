import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const searchedListState = atom({
  key: 'searchedListState',
  default: todoListState,
});

export const loggedUserState = atom({
  key: 'loggedUserState',
  default: {},
});

export const charsCounter = atom({
  key: 'charsCounter',
  default: 0,
});
