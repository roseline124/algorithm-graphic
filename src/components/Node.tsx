import { FC } from 'react'
import tw from 'twin.macro'

interface NodeProps {
  value: string | number
}

const ContainedCircle = tw.div`
  rounded-full
  flex items-center justify-center
`

const Node: FC<NodeProps> = ({ value }) => {
  return <ContainedCircle tw="bg-primary h-100 w-100">{value}</ContainedCircle>
}

export default Node
