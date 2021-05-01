import * as d3 from 'd3'
import { FC, useEffect, useRef, useState } from 'react'

import tw, { css } from 'twin.macro'
import { getNodesAndLinksFromEdges } from './utils'

interface GraphProps {
  rootNode: GraphNode
  edges: Edge[]
}

const Root = tw.div`
  flex items-center justify-center
`

const lineStyle = css`
  line {
    stroke: #ccc;
  }
`

const circleStyle = css`
  circle {
    stroke: #8f00ff;
  }

  text {
    font-size: 12px;
  }
`

const Graph: FC<GraphProps> = ({ rootNode, edges }) => {
  const width = window.innerWidth
  const height = window.innerHeight
  const { nodes, links } = getNodesAndLinksFromEdges(edges)

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
    u = nodeGroup.selectAll('circle').data(nodes)

    u.enter()
      .append('circle')
      .merge(u)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 30)
      .attr('fill', 'white')
      .attr('stroke', 'red')

    u = nodeGroup.selectAll('text').data(nodes)
    u.enter()
      .append('text')
      .text(d => d.value)
      .merge(u)
      .attr('x', d => d.x - 15)
      .attr('y', d => d.y)
      .attr('dy', _ => 5)

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
    .force('charge', d3.forceManyBody().strength(-width))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('link', d3.forceLink().links(links))
    .on('tick', ticked)

  useEffect(() => {
    setNodeGroup(d3.select(nodeRef.current))
    setLinkGroup(d3.select(linkRef.current))

    simulation.force('link', d3.forceLink().links(links))
  }, [])

  return (
    <Root>
      <svg width={width} height={height}>
        <g id="links" ref={linkRef} css={lineStyle} />
        <g id="nodes" ref={nodeRef} css={circleStyle} />
      </svg>
    </Root>
  )
}

export default Graph
