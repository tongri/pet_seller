import { useSelector } from 'react-redux'

import { MDBInput } from 'mdb-react-ui-kit'
// import Select from 'components/Forms/Select'

import useFetch from 'hooks/useFetch'

const Settings = () => {
    const id = useSelector((state) => state.users.id)

    // eslint-disable-next-line
    const [{ data, isLoading }, setData, _, save] = useFetch(
        `/api/v1/user/${id}/`
    )

    const handleInput = (e) =>
        setData((state) => ({ ...state, [e.target.name]: e.target.value }))

    return !isLoading ? (
        <div className="row justify-content-center">
            <div className="col-lg-5 col-md-5 col-sm-12 d-flex flex-column gap-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title m-0">Contact details</h5>
                    </div>
                    <div className="card-body d-flex flex-column gap-3">
                        Add your contact details so that people can contact you
                        <MDBInput
                            label="Name*"
                            name="first_name"
                            onChange={handleInput}
                            value={data.first_name || ''}
                        />
                        <MDBInput
                            label="Contact number*"
                            type="tel"
                            value={data.number || ''}
                            name="number"
                            onChange={handleInput}
                        />
                        <MDBInput
                            label="Email*"
                            type="email"
                            value={data.email || ''}
                            name="email"
                            onChange={handleInput}
                        />
                        {/* <Select
                            name="country"
                            title="Country"
                            dflt="Choose"
                            options={['Ukraine', 'Russia']}
                            onChange={(e) => console.log('h')}
                        />
                        <Select
                            name="city"
                            title="City"
                            dflt="Choose"
                            options={['Kharkiv', 'Moskow']}
                            onChange={(e) => console.log('h')}
                        /> */}
                        <div className="d-flex justify-content-end">
                            <button
                                className="btn btn-outline-warning"
                                onClick={() => save()}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title m-0">Phone number</h5>
                    </div>
                    <div className="card-body d-flex flex-column gap-3">
                        You can add your personal phone number for better
                        security. We automaticly add it to contact details.
                        <MDBInput
                            label="Current phone number"
                            type="phone"
                            value=""
                            disabled
                        />
                        <MDBInput label="Contact number*" type="phone" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title m-0">Email</h5>
                    </div>
                    <div className="card-body d-flex flex-column gap-3">
                        You can add your email for better security. We
                        automaticly add it to contact details.
                        <MDBInput
                            label="Current email"
                            type="email"
                            value=""
                            disabled
                        />
                        <MDBInput label="New email*" type="email" />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    )
}

export default Settings
