import { FC } from 'react'
import 'twin.macro'
import Graph from 'components/Graph'
import edgesData from 'data/edges.json'

// Breadth-First Search
const BFS: FC = () => {
  // @ts-ignore
  const edges: Edge[] = edgesData.edges
  return (
    <div>
      <Graph rootNode={{ value: 1000 }} edges={edges} />
    </div>
  )
}

export default BFS
