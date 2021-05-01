import { forwardRef } from 'react'
import { css } from 'twin.macro'

const lineStyle = css`
  line {
    stroke: #ccc;
  }
`

interface LinkProps {
  id?: string
}

const Link = forwardRef<SVGGElement, LinkProps>((props, ref) => {
  const { id = 'links' } = props
  return <g id={id} ref={ref} css={lineStyle} />
})

export default Link
