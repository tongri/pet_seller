import { memo, useContext } from 'react'

import { AdContext } from 'context/AdContext'
import { FORM_DATA } from 'mocks/ad.mock'
import { handlePhotoChange } from 'utils/cuAd'

import Card from 'components/Layout/Card'
import Photo from '../Photo'

const PhotoSet = memo(({ isAccepted }) => {
    const { state, setState } = useContext(AdContext)

    return (
        <Card title="Photos*" className="mt-5" bodyClassName="d-flex gap-4">
            {FORM_DATA.files.map((file, index) => (
                <Photo
                    key={index}
                    main={file.name === 'main'}
                    onChange={(e) => handlePhotoChange({ e, setState })}
                    value={state.files[file.name]}
                    disabled={!isAccepted}
                    required
                    {...file}
                />
            ))}
        </Card>
    )
})

export default PhotoSet
