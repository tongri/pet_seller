import { memo, useContext } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'

import { AdContext } from 'context/AdContext'
import { FORM_DATA } from 'mocks/ad.mock'
import { handleInputChange, handleAgeChange } from 'utils/cuAd'

import Card from 'components/Layout/Card'
import Select from '../Select'
import AgeInput from '../AgeInput'

const PetInfo = memo(({ isAccepted }) => {
    const { state, setState } = useContext(AdContext)

    return (
        <Card
            title="Description*"
            className="mt-5"
            bodyClassName="d-flex flex-column gap-3"
        >
            {FORM_DATA.PET_INFO.map((input, index) => {
                if (input.type === 'select')
                    return (
                        <Select
                            {...input}
                            disabled={!isAccepted}
                            onChange={(e) => handleInputChange({ e, setState })}
                            value={state[input.name]}
                            key={index}
                        />
                    )

                if (input.type === 'date')
                    return (
                        <AgeInput
                            {...input}
                            disabled={!isAccepted}
                            value={
                                state.age !== 0
                                    ? `${state.age} years`
                                    : `${state.days} days`
                            }
                            onChange={(value) =>
                                handleAgeChange({ value, setState })
                            }
                            key={index}
                        />
                    )
                return (
                    <MDBInput
                        {...input}
                        disabled={!isAccepted}
                        onChange={(e) => handleInputChange({ e, setState })}
                        value={state[input.name]}
                        key={index}
                    />
                )
            })}
        </Card>
    )
})

export default PetInfo
