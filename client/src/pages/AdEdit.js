import { useEffect, useContext, memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { AdContext, AdProvider } from 'context/AdContext'

import Header from 'components/Layout/Header'

import PhotoSet from 'components/Forms/CreateUpdateAd/PhotoSet'
import PetInfo from 'components/Forms/CreateUpdateAd/PetInfo'
import PetBiography from 'components/Forms/CreateUpdateAd/PetBiography'
import PetHealth from 'components/Forms/CreateUpdateAd/PetHealth'

const Form = memo(({ id, isAccepted }) => {
    const { read, update } = useContext(AdContext)
    const token = useSelector((state) => state.users.token)

    // eslint-disable-next-line
    useEffect(() => read({ id, token }), [id])

    return (
        <div className="row mb-5">
            <PhotoSet isAccepted />
            <PetInfo isAccepted />
            <PetBiography isAccepted />
            <PetHealth isAccepted />

            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end mt-5">
                <button
                    className="btn btn-warning btn-lg"
                    onClick={() => update({ id, token })}
                >
                    Save
                </button>
            </div>
        </div>
    )
})

const AdEdit = () => {
    const { id } = useParams()

    return (
        <AdProvider>
            <Header />
            <div className="row justify-content-center w-100">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <Form id={id} isAccepted />
                </div>
            </div>
        </AdProvider>
    )
}

export default AdEdit
