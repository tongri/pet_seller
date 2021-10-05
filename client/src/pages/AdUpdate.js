import useUpdateAd from 'hooks/useUpdateAd'

import { MDBInput } from 'mdb-react-ui-kit'

import Header from 'components/Layout/Header'
import Card from 'components/Layout/Card'
import Photo from 'components/Forms/Photo'
import Select from 'components/Forms/Select'
import AgeInput from 'components/Forms/AgeInput'

const AdUpdate = () => {
    const [form, { setAdData, setAdAge }] = useUpdateAd({
        testing: true,
        downloadingURL: '',
        uploadingURL: '',
    })

    const setPhoto = (e) => setAdData({ e, files: true })
    const setNested = (e, name) => setAdData({ e, nested: true, name })
    const setNested2 = (e, name, name2) =>
        setAdData({ e, nested: true, nested2: true, name, name2 })
    const setNotNested = (e) => setAdData({ e })
    const setAge = (value) => setAdAge(value)

    return (
        <>
            <Header />

            <div className="row justify-content-center w-100">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <Card
                        title="Photos*"
                        className="mt-5"
                        bodyClassName="d-flex gap-4"
                    >
                        <Photo
                            main
                            name="main"
                            id="main"
                            value={form.images.main}
                            onChange={setPhoto}
                            required
                        />
                        <Photo
                            name="image1"
                            id="image1"
                            value={form.images.image1}
                            onChange={setPhoto}
                            required
                        />
                        <Photo
                            name="image2"
                            id="image2"
                            value={form.images.image2}
                            onChange={setPhoto}
                            required
                        />
                        <Photo
                            name="image3"
                            id="image3"
                            value={form.images.image3}
                            onChange={setPhoto}
                            required
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
                        />
                        {/* TODO: Redo select */}
                        <Select
                            name="kind"
                            title="Kind of animal*"
                            options={['Cat', 'Dog']}
                            value={form.kind}
                            onChange={setNotNested}
                            dflt="Choose"
                        />
                        <Select
                            name="gender"
                            title="Gender*"
                            options={['Male', 'Female']}
                            onChange={setNotNested}
                            value={form.gender}
                            dflt="Choose"
                        />
                        <Select
                            name="size"
                            title="Size*"
                            options={['10-30', '30-40']}
                            onChange={setNotNested}
                            value={form.size}
                            dflt="Choose"
                        />
                        <AgeInput
                            title="Age*"
                            name="age"
                            onChange={setAge}
                            value={form.age}
                        />
                        <MDBInput
                            name="breed"
                            label="Breed*"
                            value={form.breed}
                            onChange={setNotNested}
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
                        />
                        <Select
                            title="General state of health"
                            name="state"
                            dflt="Choose"
                            options={['Healthy', 'Sick']}
                            value={form.health.gnr.state}
                            onChange={(e) => setNested2(e, 'health', 'gnr')}
                        />
                        <MDBInput
                            label="Describe the disease of animal"
                            textarea
                            name="dsc"
                            value={form.health.gnr.dsc}
                            onChange={(e) => setNested2(e, 'health', 'gnr')}
                        />

                        <Select
                            title="Behavioral disorders"
                            dflt="Choose"
                            options={['Psycho', 'Another one']}
                            name="state"
                            value={form.health.bhv.state}
                            onChange={(e) => setNested2(e, 'health', 'bhv')}
                        />
                        <MDBInput
                            label="Describe the behavioral disorder of animal"
                            textarea
                            name="dsc"
                            value={form.health.bhv.dsc}
                            onChange={(e) => setNested2(e, 'health', 'bhv')}
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
                        />
                        <Select
                            title="City"
                            options={['Kharkiv', 'Moskow']}
                            name="city"
                            value={form.location.city}
                            onChange={(e) => setNested(e, 'location')}
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
                        />
                        <MDBInput
                            label="Your phone number*"
                            type="phone"
                            name="phone"
                            value={form.contacts.phone}
                            onChange={(e) => setNested(e, 'contacts')}
                        />
                        <MDBInput
                            label="Your email*"
                            type="email"
                            name="email"
                            value={form.contacts.email}
                            onChange={(e) => setNested(e, 'contacts')}
                        />
                        <Select
                            title="Country"
                            options={['Ukraine', 'Russia']}
                            name="country"
                            value={form.contacts.country}
                            onChange={(e) => setNested(e, 'contacts')}
                        />
                        <Select
                            title="City"
                            options={['Kharkiv', 'Moskow']}
                            name="city"
                            value={form.contacts.city}
                            onChange={(e) => setNested(e, 'contacts')}
                        />
                    </Card>

                    <div className="row mb-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end mt-5">
                            <button className="btn btn-warning btn-lg">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdUpdate
