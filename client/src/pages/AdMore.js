import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import addAd from 'utils/rviewed'

import Header from 'components/Layout/Header'
import Carousel from 'components/Utils/Carousel'

import Heart from 'components/Icons/Heart'
import TagList from 'components/Ads/TagList'
import Active from 'components/Buttons/Active'
import Inactive from 'components/Buttons/Inactive'

// name: 'Onix',
// country: 'Ukraine',
// city: 'Kharkiv',
// kind: 'Cat',
// gender: 'Male',
// size: '30-40cm',
// age: '0.5 year',
// health: 'Healthy',
// date: '10 August',
// birth_date: '25.06.2020',
// favourite: false,

const AdMore = () => {
    const { id } = useParams()
    const username = useSelector((state) => state.users.username)
    // TODO: Fetch info from server
    const {
        name,
        date,
        images,
        city,
        country,
        favourite,
        health,
        biography,
        isActive,
        author,
        ...tags
    } = useSelector((state) => state.pets.list.find((pet) => pet.id === +id))

    useEffect(() => {
        console.log('USE EFFECT')
        addAd(id)
    }, [id])

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 small">
                                <i className="far fa-clock"></i> {date}
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-2 col-lg-2 col-sm-3">
                                <span className="h3 me-2">{name}</span>{' '}
                                <Heart className="fa-lg" id={id} />
                            </div>
                            {username === author && (
                                <div className="col-md-4 col-lg-4 col-sm-12 d-flex flex-wrap justify-content-between gap-3">
                                    {isActive ? (
                                        <Active className="flex-fill" />
                                    ) : (
                                        <Inactive className="flex-fill" />
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="row my-4 justify-content-between">
                            <div className="col-md-8 col-lg-8 col-sm-12">
                                <div className="card">
                                    <Carousel imageSet={images} />
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
                                                        Vlad
                                                    </span>
                                                </div>
                                                <div>
                                                    <i className="fas fa-phone-alt me-3"></i>
                                                    +380950075367
                                                </div>
                                                <div>
                                                    <i className="fas fa-envelope me-3"></i>
                                                    iskenderov.vsl@gmail.com
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
                                                {city}, {country}
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
                                        <TagList tags={tags} />
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
                                        {biography}
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
                                            {health.vac}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-bold me-2">
                                                Alergies:
                                            </span>
                                            {health.alg}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-bold me-2">
                                                General state of health:
                                            </span>
                                            {health.gnl}
                                        </p>
                                        <p className="m-0">
                                            <span className="fw-bold me-2">
                                                Behavioral disorders:
                                            </span>
                                            {health.bhv}
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

export default AdMore
