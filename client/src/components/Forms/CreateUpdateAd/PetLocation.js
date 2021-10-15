import { memo, useContext } from 'react'
import { AdContext } from 'context/AdContext'
import { handleInputChange } from 'utils/cuAd'

import useSelect from 'hooks/useSelect'

import { FORM_DATA } from 'mocks/ad.mock'

import Card from 'components/Layout/Card'

import Select from '../Select'

const PetLocation = memo(({ isAccepted }) => {
    const { state, setState } = useContext(AdContext)
    const [cities, setCountry] = useSelect()

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
        handleInputChange({ e, setState })
    }

    return (
        <Card
            title="Location"
            className="mt-5"
            bodyClassName="d-flex flex-column gap-3"
        >
            <Select
                {...FORM_DATA.LOCATION[0]}
                value={state.country}
                onChange={handleCountryChange}
                disabled={!isAccepted}
            />

            <Select
                {...FORM_DATA.LOCATION[1]}
                options={cities}
                value={state.city}
                onChange={(e) => handleInputChange({ e, setState })}
                disabled={!isAccepted}
            />
        </Card>
    )
})

export default PetLocation
