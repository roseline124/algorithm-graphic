import { FC } from 'react'
import 'twin.macro'
// import Node from 'components/Node'
import Graph from 'components/Graph'

import flatten from 'lodash/flatten'
import uniqBy from 'lodash/uniqBy'

// Breadth-First Search
const BFS: FC = () => {
  const edges: Edge[] = [
    [{ value: 1 }, { value: 2 }],
    [{ value: 1 }, { value: 3 }],
    [{ value: 1 }, { value: 4 }],
    [{ value: 2 }, { value: 4 }],
    [{ value: 3 }, { value: 4 }],
  ]

  return (
    <div>
      <Graph rootNode={{ value: 1000 }} edges={edges} />
    </div>
  )
}

export default BFS
