import { D1Box } from '@components/Box/Box'
import { D1Text } from '@components/Text/Text'

import ReactTooltip from 'react-tooltip'

export const D1Tooltip = ({ children, text, id, ...props }) => {
  return (
    <D1Box>
      <D1Box data-tip data-for={id}>
        {children}
      </D1Box>
      <ReactTooltip id={id} type="light" place="right" effect="solid" border={true} {...props}>
        <D1Text>{text}</D1Text>
      </ReactTooltip>
    </D1Box>
  )
}
