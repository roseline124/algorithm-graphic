import { FC } from 'react'
import 'twin.macro'
import Graph from 'components/Graph'
import edgesData from 'data/edges.json'

// Breadth-First Search
const BFS: FC = () => {
  // @ts-ignore
  const edges: Edge[] = edgesData.edges
  const rootNode: GraphNode = edgesData.rootNode

  return (
    <div>
      <Graph rootNode={rootNode} edges={edges} />
    </div>
  )
}

export default BFS
