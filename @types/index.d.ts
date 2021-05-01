
// https://stackoverflow.com/a/59906630
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never
type FixedLengthArray<T extends Node[]> =
  Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
  & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> }

// Graph
type Value = number | string
type Edge = FixedLengthArray<[Node, Node]>

interface Node {
  value: Value
}

interface GraphSearchInput {
  edges: Edge[]
  rootNode: Node
  visited?: Node[]
  queue?: Node[]
}