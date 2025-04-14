export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export type Required<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property]
}

export type ExcludeArrayKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? never : K
}[keyof T]

export type WithoutArrayKeys<T> = Pick<T, ExcludeArrayKeys<T>>
