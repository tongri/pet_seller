import { useEffect } from 'react'
import { useParams } from 'react-router'

import useUpdateAd from 'hooks/useUpdateAd'
import useSelect from 'hooks/useSelect'

import { MDBInput } from 'mdb-react-ui-kit'

import Header from 'components/Layout/Header'
import Card from 'components/Layout/Card'
import Photo from 'components/Forms/Photo'
import Select from 'components/Forms/Select'
import AgeInput from 'components/Forms/AgeInput'

const AdEdit = () => {
    const { id } = useParams()

    const [form, setAdData, setAdAge] = useUpdateAd({
        downloadingURL: `/api/v1/pets/${id}/personal/`,
        uploadingURL: '',
    })

    console.log(form)

    const [cities, setCountry] = useSelect()
    useEffect(() => setCountry(form.country), [form.country])

    const setPhoto = (e) => setAdData({ e, files: true })
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
                            value={
                                form.files.main
                                    ? form.files.main
                                    : form.files[0]
                            }
                            onChange={setPhoto}
                            required
                        />
                        <Photo
                            name="image1"
                            id="image1"
                            value={
                                form.files.image1
                                    ? form.files.image1
                                    : form.files[1]
                            }
                            onChange={setPhoto}
                            required
                        />
                        <Photo
                            name="image2"
                            id="image2"
                            value={
                                form.files.image2
                                    ? form.files.image2
                                    : form.files[2]
                            }
                            onChange={setPhoto}
                            required
                        />
                        <Photo
                            name="image3"
                            id="image3"
                            value={
                                form.files.image3
                                    ? form.files.image3
                                    : form.files[3]
                            }
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

                        <Select
                            name="kind_of_animal"
                            title="Kind of animal*"
                            options={['Cat', 'Dog']}
                            value={form.kind_of_animal}
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
                            options={['10-30', '30-50', '50-70']}
                            onChange={setNotNested}
                            value={form.size}
                            dflt="Choose"
                        />
                        <AgeInput title="Age*" name="age" onChange={setAge} />
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
                            value={form.bio}
                            name="bio"
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
                        />
                        <Select
                            title="General state of health"
                            name="state_of_health"
                            dflt="Choose"
                            options={['Healthy', 'Sick']}
                            value={form.state_of_health}
                            onChange={(e) => setNotNested(e)}
                        />
                        <MDBInput
                            label="Describe the disease of animal"
                            textarea
                            name="disease"
                            value={form.disease}
                            onChange={(e) => setNotNested(e)}
                        />

                        <Select
                            title="Behavioral disorders"
                            dflt="Choose"
                            options={['Psycho', 'Another one']}
                            name="behaviour_disorders"
                            value={form.behaviour_disorders}
                            onChange={(e) => setNotNested(e)}
                        />
                        <MDBInput
                            label="Describe the behavioral disorder of animal"
                            textarea
                            name="disorders_description"
                            value={form.disorders_description}
                            onChange={(e) => setNotNested(e)}
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
                            value={form.country}
                            onChange={(e) => setNotNested(e)}
                        />
                        <Select
                            title="City"
                            options={cities}
                            name="city"
                            value={form.city}
                            onChange={(e) => setNotNested(e)}
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

export default AdEdit
