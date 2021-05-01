import { forwardRef } from 'react'

interface NodeProps {
  id?: string
}

const Node = forwardRef<SVGGElement, NodeProps>((props, ref) => {
  const { id = 'nodes' } = props

  return <g id={id} ref={ref} />
})

export default Node
