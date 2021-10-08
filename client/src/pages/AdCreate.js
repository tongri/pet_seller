import { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'

import useCreateAd from 'hooks/useCreateAd'

import Header from 'components/Layout/Header'
import Card from 'components/Layout/Card'
import Photo from 'components/Forms/Photo'
import Select from 'components/Forms/Select'
import AgeInput from 'components/Forms/AgeInput'

const AdCreate = () => {
    const [form, setForm, setFormAge, save] = useCreateAd()
    const [accepted, setAcceptance] = useState(false)

    const setPhoto = (e) => setForm({ e, files: true })
    const setNested = (e, name) => setForm({ e, nested: true, name })
    const setNotNested = (e) => setForm({ e })
    const setAge = (value) => setFormAge(value)

    return (
        <>
            <Header />

            <div className="row justify-content-center mt-5">
                <div className="col-lg-8 col-md-8 col-sm-10">
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
                            value={form.files.main}
                            onChange={setPhoto}
                            required
                            disabled={!accepted}
                        />
                        <Photo
                            name="image1"
                            id="image1"
                            value={form.files.image1}
                            onChange={setPhoto}
                            required
                            disabled={!accepted}
                        />
                        <Photo
                            name="image2"
                            id="image2"
                            value={form.files.image2}
                            onChange={setPhoto}
                            required
                            disabled={!accepted}
                        />
                        <Photo
                            name="image3"
                            id="image3"
                            value={form.files.image3}
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
                            name="kind_of_animal"
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
                            options={['10-30', '30-50', '50-70']}
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
                            value={form.bio}
                            name="bio"
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
                                name="vaccination"
                                value={form.vaccination}
                                onChange={(e) => setNotNested(e)}
                                disabled={!accepted}
                            />
                            <div className="form-text">
                                Enter here only title of vaccinations
                            </div>
                        </div>
                        <MDBInput
                            label="Allergies"
                            value={form.allergies}
                            onChange={(e) => setNotNested(e)}
                            name="allergies"
                            disabled={!accepted}
                        />
                        <Select
                            title="General state of health"
                            name="state_of_health"
                            dflt="Choose"
                            options={['Healthy', 'Ill']}
                            value={form.state_of_health}
                            onChange={(e) => setNotNested(e)}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Describe the disease of animal"
                            textarea
                            name="disease"
                            value={form.disease}
                            onChange={(e) => setNotNested(e)}
                            disabled={!accepted}
                        />

                        <Select
                            title="Behavioral disorders"
                            dflt="Choose"
                            options={['Fearfulness', 'Rabies']}
                            name="behaviour_disorders"
                            value={form.behaviour_disorders}
                            onChange={(e) => setNotNested(e)}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Describe the behavioral disorder of animal"
                            textarea
                            name="disorders_description"
                            value={form.disorders_description}
                            onChange={(e) => setNotNested(e)}
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
                            options={['Ukraine', 'Russia', 'Polland']}
                            name="country"
                            value={form.country}
                            onChange={(e) => setNotNested(e)}
                            disabled={!accepted}
                        />
                        <Select
                            title="City"
                            options={['Kharkiv', 'Moskow', 'Warsawa']}
                            name="city"
                            value={form.city}
                            onChange={(e) => setNotNested(e)}
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
                            name="contact_name"
                            value={form.contacts.name}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Your phone number*"
                            type="phone"
                            name="contact_phone"
                            value={form.contacts.phone}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <MDBInput
                            label="Your email*"
                            type="email"
                            name="contact_email"
                            value={form.contacts.email}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <Select
                            title="Country"
                            options={['Ukraine', 'Russia', 'Polland']}
                            name="contact_country"
                            value={form.contacts.country}
                            onChange={(e) => setNested(e, 'contacts')}
                            disabled={!accepted}
                        />
                        <Select
                            title="City"
                            options={['Kharkiv', 'Moskow', 'Russia']}
                            name="contact_city"
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
                                onClick={() => save()}
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
