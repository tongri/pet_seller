import { memo, useContext } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'

import { AdContext } from 'context/AdContext'
import { FORM_DATA } from 'mocks/ad.mock'

import { handleContactsChange } from 'utils/cuAd'

import Card from 'components/Layout/Card'

const PetContact = memo(({ isAccepted }) => {
    const { state, setState } = useContext(AdContext)

    return (
        <Card
            title="Contact details"
            className="mt-5"
            bodyClassName="d-flex flex-column gap-3"
        >
            {FORM_DATA.CONTACT.map((input, index) => (
                <MDBInput
                    {...input}
                    disabled={!isAccepted}
                    value={state.contacts[input.name]}
                    onChange={(e) => handleContactsChange({ e, setState })}
                    key={index}
                />
            ))}
        </Card>
    )
})

export default PetContact
