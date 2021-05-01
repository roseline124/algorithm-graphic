// https://stackoverflow.com/a/59906630
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never
type FixedLengthArray<T extends GraphNode[]> =
  Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
  & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> }

// Graph
type Value = number | string

interface GraphNode extends d3.SimulationNodeDatum {
  value: Value
}

type Edge = FixedLengthArray<[GraphNode, GraphNode]>

interface GraphSearchInput {
  edges: Edge[]
  rootNode: GraphNode
  visited?: GraphNode[]
  queue?: GraphNode[]
}