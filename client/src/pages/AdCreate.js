import { useState } from 'react'

import Header from 'components/Layout/Header'
import Card from 'components/Layout/Card'
import Photo from 'components/Forms/Photo'

const AdCreate = () => {
    const [form, setForm] = useState({
        photos: {
            main: '',
            photo1: null,
            photo2: null,
            photo3: null,
        },
    })

    const setPhotos = (e) => {
        console.log(e.target.name, e.target.files)
        setForm((state) => ({
            ...state,
            photos: {
                ...state.photos,
                [e.target.name]: e.target.files[0],
            },
        }))
    }

    return (
        <>
            <Header />

            <div className="row justify-content-center mt-5">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <h4 className="m-0">Remember</h4>
                    <p className="my-3">
                        Petshome is an ad aggregator, created to connect people
                        interested in animal adoption with people interested in
                        finding a host for an animal. This is not a store, but a
                        platform that helps animals in need find home. We are
                        not the shop. All sales ads will be deleted without
                        warning.
                    </p>
                    <div className="form-check d-flex">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            value=""
                            id="policies"
                        />
                        <label
                            htmlFor="policies"
                            className="form-check-label small"
                        >
                            Check here to indicate that you have read and agree
                            to the terms of the “Pets Home Agreement", without
                            this you can't fill form of adding advertisement.
                        </label>
                    </div>

                    <Card title="Photos" className="mt-5">
                        <Photo
                            main
                            name="main"
                            id="main"
                            value={form.photos.main}
                            onChange={setPhotos}
                        />
                    </Card>
                </div>
            </div>
        </>
    )
}

export default AdCreate
