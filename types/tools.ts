export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
