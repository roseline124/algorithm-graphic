import * as d3 from 'd3'
import flatten from 'lodash/flatten'
import uniqBy from 'lodash/uniqBy'
import { FC, useEffect, useRef, useState } from 'react'
import tw from 'twin.macro'
import Link from './Link'
import Node from './Node'

const CONTAINER_WIDTH = 400
const CONTAINER_HEIGHT = 300

interface GraphProps {
  rootNode: GraphNode
  edges: Edge[]
}

const Root = tw.div`
  flex items-center justify-center
`

const Graph: FC<GraphProps> = ({ rootNode, edges }) => {
  const nodes = uniqBy(flatten(edges), 'value')
  const links: d3.GraphLink[] = edges.map(edge => ({
    source: nodes.findIndex(node => node.value === edge[0].value),
    target: nodes.findIndex(node => node.value === edge[1].value),
  }))

  const [nodeGroup, setNodeGroup] = useState(null)
  const [linkGroup, setLinkGroup] = useState(null)

  const nodeRef = useRef<SVGGElement>(null)
  const linkRef = useRef<SVGGElement>(null)

  let u
  const updateLinks = () => {
    u = linkGroup.selectAll('line').data(links)

    u.enter()
      .append('line')
      .merge(u)
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    u.exit().remove()
  }
  const updateNodes = () => {
    u = nodeGroup.selectAll('text').data(nodes)

    u.enter()
      .append('text')
      .text(d => d.value)
      .merge(u)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('dy', d => 5)

    u.exit().remove()
  }

  const ticked = () => {
    if (nodeGroup && linkGroup) {
      updateLinks()
      updateNodes()
    }
  }

  const simulation = d3
    .forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-220))
    .force('center', d3.forceCenter(CONTAINER_WIDTH / 2, CONTAINER_HEIGHT / 2))
    .force('link', d3.forceLink().links(links))
    .on('tick', ticked)

  useEffect(() => {
    setNodeGroup(d3.select(nodeRef.current))
    setLinkGroup(d3.select(linkRef.current))

    simulation.force('link', d3.forceLink().links(links))
  }, [])

  return (
    <Root tw="p-18">
      <svg width={CONTAINER_WIDTH} height={CONTAINER_HEIGHT}>
        <Link ref={linkRef} />
        <Node ref={nodeRef} />
      </svg>
    </Root>
  )
}

export default Graph
