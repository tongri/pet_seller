import { memo, useContext } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'

import { AdContext } from 'context/AdContext'
import { handleInputChange } from 'utils/cuAd'

import Card from 'components/Layout/Card'

const PetBiography = memo(({ isAccepted }) => {
    const { state, setState } = useContext(AdContext)

    return (
        <Card title="Biography*" className="mt-5">
            Write here what you know about life of this animal
            <MDBInput
                textarea
                label="Bio*"
                className="mt-3"
                onChange={(e) => handleInputChange({ e, setState })}
                value={state.bio}
                name="bio"
                disabled={!isAccepted}
            />
            <div className="form-text">Min 40 characters</div>
        </Card>
    )
})

export default PetBiography
