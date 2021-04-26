import { FC } from "react"
import "twin.macro"

import Node from "components/Node"

const Home: FC = () => {
  return (
    <div tw="flex">
      <div tw="flex-initial p-8">ddd</div>
      <div tw="flex-initial">ddd</div>
      <div tw="flex-initial">ddd</div>
      <Node />
    </div>
  )
}

export default Home
