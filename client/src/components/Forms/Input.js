import { MDBInput } from 'mdb-react-ui-kit'

const Input = ({ title, ...rest }) => {
    return <MDBInput type="text" label={title} {...rest} />
}

export default Input
