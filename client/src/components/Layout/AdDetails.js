import { useSelector } from 'react-redux'

import moment from 'moment'

import Header from 'components/Layout/Header'
import Carousel from 'components/Utils/Carousel'

import Heart from 'components/Icons/Heart'
import TagList from 'components/Ads/TagList'
import Active from 'components/Buttons/Active'
import Inactive from 'components/Buttons/Inactive'

const AdDetails = ({ ad, id }) => {
    const { isAuthenticated, username } = useSelector((state) => state.users)

    console.log(ad.files)
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 small">
                                <i className="far fa-clock"></i>{' '}
                                {moment(ad.date).format('MMM Do YY')}
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4 col-lg-4 col-sm-8">
                                <span className="h3 me-2">{ad.name}</span>{' '}
                                <Heart className="fa-lg" id={id} />
                            </div>
                            {isAuthenticated &&
                                username === ad.owner.username && (
                                    <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-wrap justify-content-between gap-3">
                                        {ad.is_active ? (
                                            <Active
                                                id={id}
                                                className="flex-fill"
                                            />
                                        ) : (
                                            <Inactive
                                                id={id}
                                                className="flex-fill"
                                            />
                                        )}
                                    </div>
                                )}
                        </div>
                        <div className="row my-4 justify-content-between">
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="card">
                                    {/* {ad.files && Array.isArray(ad.files) ? (
                                        <Carousel
                                            imageSet={ad.files.map(
                                                (img) => img && img.image
                                            )}
                                        />
                                    ) : Array.isArray(ad.files) ? (
                                        <Carousel
                                            imageSet={ad.files.map(
                                                (img) => img && img.image
                                            )}
                                        />
                                    )
                                            } */}
                                    {ad.files && Array.isArray(ad.files) ? (
                                        <Carousel
                                            imageSet={ad.files.map(
                                                (img) => img && img.image
                                            )}
                                        />
                                    ) : (
                                        <Carousel
                                            imageSet={Object.values(ad.files)}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12">
                                <div className="row gap-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="card">
                                            <div className="card-header pb-0 px-5">
                                                <div className="card-title">
                                                    Owner
                                                </div>
                                            </div>
                                            <div className="card-body px-5 py-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <i className="far fa-user-circle fa-3x me-2"></i>
                                                    <span className="h4 m-0 p-0 g-0 lh-1">
                                                        {ad.owner.first_name ||
                                                            'No name'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <i className="fas fa-phone-alt me-3"></i>
                                                    {ad.owner.number ||
                                                        'No number'}
                                                </div>
                                                <div>
                                                    <i className="fas fa-envelope me-3"></i>
                                                    {ad.owner.email ||
                                                        'No email'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="card">
                                            <div className="card-header pb-0 px-5">
                                                <div className="card-title">
                                                    Location
                                                </div>
                                            </div>
                                            <div className="card-body px-5 py-4">
                                                <i className="fas fa-map-marker-alt"></i>{' '}
                                                {ad.city}, {ad.country}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="card">
                                    <div className="card-body px-5">
                                        <TagList tags={ad} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="card">
                                    <div className="card-header g-0 pb-0 px-5">
                                        <div className="card-title">
                                            Biography
                                        </div>
                                    </div>
                                    <div className="card-body px-5">
                                        {ad.bio}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="card">
                                    <div className="card-header g-0 pb-0 px-5">
                                        <div className="card-title">
                                            Health condition
                                        </div>
                                    </div>
                                    <div className="card-body px-5">
                                        <p className="m-0">
                                            <span className="fw-bold me-2">
                                                Basic vaccinations:
                                            </span>
                                            {ad.vaccination || 'None'}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-bold me-2">
                                                Alergies:
                                            </span>
                                            {ad.allergies || 'None'}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-bold me-2">
                                                General state of health:
                                            </span>
                                            {ad.state_of_health || 'None'}
                                            <br />
                                            <span className="m-0 text-muted">
                                                {ad.disease || 'None'}
                                            </span>
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-bold me-2">
                                                Behavioral disorders:
                                            </span>
                                            {ad.behaviour_disorders || 'None'}
                                            <br />
                                            <span className="m-0 text-muted">
                                                {ad.disorders_description ||
                                                    'None'}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdDetails
