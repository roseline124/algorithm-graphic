import { FC } from 'react'
import 'twin.macro'

import Node from 'components/Node'
import Graph from 'components/Graph'

// Breadth-First Search
const BFS: FC = () => {
  return (
    <div>
      <Graph rootNode={1000} edges={[[1000, 999]]} />
    </div>
  )
}

export default BFS
