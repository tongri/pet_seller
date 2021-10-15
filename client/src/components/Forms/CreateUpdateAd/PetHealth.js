import { memo, useContext } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'

import { AdContext } from 'context/AdContext'

import { FORM_DATA } from 'mocks/ad.mock'
import { handleInputChange } from 'utils/cuAd'

import Card from 'components/Layout/Card'
import Select from '../Select'

const PetHealth = memo(({ isAccepted }) => {
    const { state, setState } = useContext(AdContext)

    return (
        <Card
            title="Health"
            className="mt-5"
            bodyClassName="d-flex flex-column gap-3"
        >
            {FORM_DATA.HEALTH.map((input, index) => {
                if (input.type === 'select')
                    return (
                        <Select
                            {...input}
                            disabled={!isAccepted}
                            value={state[input.name]}
                            onChange={(e) => handleInputChange({ e, setState })}
                            key={index}
                        />
                    )

                return (
                    <MDBInput
                        {...input}
                        textarea={input.type === 'textarea'}
                        disabled={!isAccepted}
                        value={state[input.name]}
                        onChange={(e) => handleInputChange({ e, setState })}
                        key={index}
                    />
                )
            })}
        </Card>
    )
})

export default PetHealth
