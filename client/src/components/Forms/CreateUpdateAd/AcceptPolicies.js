import { memo } from 'react'

const AcceptPolicies = memo(({ isAccepted, setAcceptance }) => {
    const handleAcceptance = () => setAcceptance((state) => !state)

    return (
        <>
            <h4 className="m-0">Remember</h4>
            <p className="my-3">
                Petshome is an ad aggregator, created to connect people
                interested in animal adoption with people interested in finding
                a host for an animal. This is not a store, but a platform that
                helps animals in need find home. We are not the shop. All sales
                ads will be deleted without warning.
            </p>
            <div className="form-check d-flex">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isAccepted}
                    id="policies"
                    onChange={handleAcceptance}
                />
                <label htmlFor="policies" className="form-check-label small">
                    Check here to indicate that you have read and agree to the
                    terms of the “Pets Home Agreement", without this you can't
                    fill form of adding advertisement.
                </label>
            </div>
        </>
    )
})

export default AcceptPolicies
