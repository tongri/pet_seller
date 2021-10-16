import { memo } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'

const Input = memo(({ title, ...rest }) => {
    return <MDBInput type="text" label={title} {...rest} />
})

export default Input
