import tw from 'twin.macro'
import { FC, ReactNode, useEffect, useRef } from 'react'
import * as d3 from 'd3'

import { Edge } from 'algorithms/search/bfs'

interface GraphProps {
  rootNode: ReactNode
  edges: Edge[]
}

const Root = tw.div`
  flex items-center justify-center
`

const Graph: FC<GraphProps> = ({ rootNode, edges }) => {
  const myRef = useRef(null)
  const dataset = [100, 200, 300, 400, 500]

  console.log({ myRef })

  useEffect(() => {
    const size = 500
    const svg = d3
      .select(myRef.current)
      .append('svg')
      .attr('width', size)
      .attr('height', size)

    const rect_width = 95
    svg
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 5 + i * (rect_width + 5))
      .attr('y', (d: number) => size - d)
      .attr('width', rect_width)
      .attr('height', d => d)
      .attr('fill', 'teal')
  }, [])

  return (
    <Root tw="p-18">
      <div ref={myRef}></div>
    </Root>
  )
}

export default Graph
