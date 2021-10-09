import { useSelector } from 'react-redux'
import { saveUserSettings } from 'api/ads.api'

import { MDBInput } from 'mdb-react-ui-kit'
// import Select from 'components/Forms/Select'

import useFetch from 'hooks/useFetch'
import { getConfigByToken } from 'utils/config'

const Settings = () => {
    const { id, token } = useSelector((state) => state.users)

    // eslint-disable-next-line
    const [{ data, isLoading }, setData, _] = useFetch(`/api/v1/user/${id}/`)

    const handleSave = () =>
        saveUserSettings({ id, data, config: getConfigByToken(token) })

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
                                onClick={() => handleSave()}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    )
}

export default Settings
