import { memo, useState, useContext } from 'react'
import { useSelector } from 'react-redux'

import { AdProvider, AdContext } from 'context/AdContext'

import Header from 'components/Layout/Header'

import AcceptPolicies from 'components/Forms/CreateUpdateAd/AcceptPolicies'

import PhotoSet from 'components/Forms/CreateUpdateAd/PhotoSet'
import PetInfo from 'components/Forms/CreateUpdateAd/PetInfo'
import PetBiography from 'components/Forms/CreateUpdateAd/PetBiography'
import PetHealth from 'components/Forms/CreateUpdateAd/PetHealth'
import PetLocation from 'components/Forms/CreateUpdateAd/PetLocation'
import PetContact from 'components/Forms/CreateUpdateAd/PetContact'

const Form = memo(({ isAccepted }) => {
    const { create } = useContext(AdContext)
    const { id, token } = useSelector((state) => state.users)

    return (
        <>
            <PhotoSet isAccepted={isAccepted} />
            <PetInfo isAccepted={isAccepted} />
            <PetBiography isAccepted={isAccepted} />
            <PetHealth isAccepted={isAccepted} />
            <PetLocation isAccepted={isAccepted} />
            <PetContact isAccepted={isAccepted} />

            <div className="row mb-5">
                <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end mt-5">
                    <button
                        className="btn btn-warning btn-lg"
                        disabled={!isAccepted}
                        onClick={() => create({ id, token })}
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
    )
})

const AdCreate = () => {
    const [isAccepted, setAcceptance] = useState(false)

    return (
        <AdProvider>
            <Header />

            <div className="row justify-content-center mt-5">
                <div className="col-lg-8 col-md-8 col-sm-10">
                    <AcceptPolicies {...{ isAccepted, setAcceptance }} />

                    <Form isAccepted={isAccepted} />
                </div>
            </div>
        </AdProvider>
    )
}

export default AdCreate
