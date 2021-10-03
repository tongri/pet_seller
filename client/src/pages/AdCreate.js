import { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'

import useCreateAd from 'hooks/useCreateAd'

import Header from 'components/Layout/Header'
import Card from 'components/Layout/Card'
import Photo from 'components/Forms/Photo'
import Select from 'components/Forms/Select'
import AgeInput from 'components/Forms/AgeInput'

const AdCreate = () => {
    const [form, setForm, setFormAge] = useCreateAd()
    const [accepted, setAcceptance] = useState(false)

    const setPhoto = (e) => setForm({ e, files: true })
    const setNested = (e, name) => setForm({ e, nested: true, name })
    const setNested2 = (e, name, name2) =>
        setForm({ e, nested: true, nested2: true, name, name2 })
    const setNotNested = (e) => setForm({ e })
    const setAge = (value) => setFormAge(value)

    return (
        <>
            <Header />

            <div className="row justify-content-center mt-5 w-100">
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
                            checked={accepted}
                            id="policies"
                            onChange={(e) => setAcceptance((state) => !state)}
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

                    <Card
                        title="Photos*"
                        className="mt-5"
                        bodyClassName="d-flex gap-4"
                    >
                        <Photo
                            main
                            name="main"
                            id="main"
                            value={form.photos.main}
                            onChange={setPhoto}
                            required
                            disabled={!accepted}
                        />
                        <Photo
                            name="photo1"
                            id="photo1"
                            value={form.photos.photo1}
                            onChange={setPhoto}
                            required
                            disabled={!accepted}
                        />
                        <Photo
                            name="photo2"
                            id="photo2"
                            value={form.photos.photo2}
                            onChange={setPhoto}
                            required
                            disabled={!accepted}
                        />
                        <Photo
                            name="photo3"
                            id="photo3"
                            value={form.photos.photo3}
                            onChange={setPhoto}
                            required
                            disabled={!accepted}
                        />
                    </Card>
                    <Card
                        title="Description*"
                        className="mt-5"
                        bodyClassName="d-flex flex-column gap-3"
                    >
                        <MDBInput
                            name="name"
                            label="Name*"
                            value={form.name}
                            onChange={setNotNested}
                            disabled={!accepted}
                        />
                        {/* TODO: Redo select */}
                        <Select
                            name="kind"
                            title="Kind of animal*"
                            options={['Cat', 'Dog']}
                            onChange={setNotNested}
                            dflt="Choose"
                            disabled={!accepted}
                        />
                        <Select
                            name="gender"
                            title="Gender*"
                            options={['Male', 'Female']}
                            onChange={setNotNested}
                            dflt="Choose"
                            disabled={!accepted}
                        />
                        <Select
                            name="size"
                            title="Size*"
                            options={['10-30', '30-40']}
                            onChange={setNotNested}
                            dflt="Choose"
                            disabled={!accepted}
                        />
                        <AgeInput
                            title="Age*"
                            name="age"
                            onChange={setAge}
                            disabled={!accepted}
                        />
                        {/* TODO: Add age */}
                        <MDBInput
                            name="breed"
                            label="Breed*"
                            value={form.breed}
                            onChange={setNotNested}
                            disabled={!accepted}
                        />
                    </Card>
                    <Card title="Biography*" className="mt-5">
                        Write here what you know about life of this animal
                        <MDBInput
                            textarea
                            label="Bio*"
                            className="mt-3"
                            onChange={setNotNested}
                            value={form.biography}
                            name="biography"
                            disabled={!accepted}
                        />
                        <div className="form-text">Min 40 characters</div>
                    </Card>
                    <Card
                        title="Health"
                        className="mt-5"
                        bodyClassName="d-flex flex-column gap-3"
                    >
                        <div>
                            <MDBInput
                                label="Basic vaccination"
                                name="vac"
                                value={form.health.vac}
                                onChange={(e) => setNested(e, 'health')}
                                disabled={!accepted}
                            />
                            <div className="form-text">
                                Enter here only title of vaccinations
                            </div>
                        </div>
                        <MDBInput
                            label="Allergies"
                            value={form.health.alr}
                            onChange={(e) => setNested(e, 'health')}
                            name="alr"
                            disabled={!accepted}
                        />
                        <Select
                            title="General state of health"
                            name="state"
                            dflt="Choose"
                            options={['Health', 'Sick']}
                            value={form.health.gnr.state}
                            onChange={(e) => setNested2(e, 'health', 'gnr')}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Describe the disease of animal"
                            textarea
                            name="dsc"
                            value={form.health.gnr.dsc}
                            onChange={(e) => setNested2(e, 'health', 'gnr')}
                            disabled={!accepted}
                        />

                        <Select
                            title="Behavioral disorders"
                            dflt="Choose"
                            options={['Psycho', 'Another one']}
                            name="state"
                            value={form.health.bhv.state}
                            onChange={(e) => setNested2(e, 'health', 'bhv')}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Describe the behavioral disorder of animal"
                            textarea
                            name="dsc"
                            value={form.health.bhv.dsc}
                            onChange={(e) => setNested2(e, 'health', 'bhv')}
                            disabled={!accepted}
                        />
                    </Card>
                    <Card
                        title="Location"
                        className="mt-5"
                        bodyClassName="d-flex flex-column gap-3"
                    >
                        <Select
                            title="Country"
                            options={['Ukraine', 'Russia']}
                            name="country"
                            value={form.location.country}
                            onChange={(e) => setNested(e, 'location')}
                            disabled={!accepted}
                        />
                        <Select
                            title="City"
                            options={['Khrakiv', 'Moskow']}
                            name="city"
                            value={form.location.city}
                            onChange={(e) => setNested(e, 'location')}
                            disabled={!accepted}
                        />
                    </Card>
                    <Card
                        title="Contact details"
                        className="mt-5"
                        bodyClassName="d-flex flex-column gap-3"
                    >
                        <MDBInput
                            label="Your name*"
                            name="name"
                            value={form.contacts.name}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Your phone number*"
                            type="phone"
                            name="phone"
                            value={form.contacts.phone}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Your email*"
                            type="email"
                            name="email"
                            value={form.contacts.email}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <Select
                            title="Country"
                            options={['Ukraine', 'Russia']}
                            name="country"
                            value={form.contacts.country}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <Select
                            title="City"
                            options={['Khrakiv', 'Moskow']}
                            name="city"
                            value={form.contacts.city}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                    </Card>

                    <div className="row mb-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end mt-5">
                            <button
                                className="btn btn-warning btn-lg"
                                disabled={!accepted}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdCreate
