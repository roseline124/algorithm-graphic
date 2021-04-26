import { FC } from "react"
import "twin.macro"

interface NodeProps {
  value: string | number
}

const Node: FC<NodeProps> = ({ value }) => {
  return (
    <div tw="bg-primary rounded-full h-100 w-100 flex items-center justify-center">
      {value}
    </div>
  )
}

export default Node
