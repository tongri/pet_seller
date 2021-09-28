import Header from 'components/Layout/AuthHeader'
import AuthContainer from 'components/Forms/AuthContainer'

const Authentication = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <AuthContainer />
            </div>
        </>
    )
}

export default Authentication
