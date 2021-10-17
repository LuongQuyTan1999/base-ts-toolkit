const set = (data: unknown, key: string): void => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(data));
};

const get = (key: string): undefined | string => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  const item = window.localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item);
};

const remove = (key: string): void => {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }
  window.localStorage.removeItem(key);
};

const clear = (): void => {
  if (!window.localStorage || !window.JSON) {
    return;
  }
  window.localStorage.clear();
};

export const LocalStorage = {
  set,
  get,
  remove,
  clear,
};
