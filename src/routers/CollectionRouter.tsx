import { CollectionScreen } from 'modules/collection'
import { Route, Routes } from 'react-router-dom'

export const CollectionRouter = () => {
    return (
        <Routes>
            <Route index element={<CollectionScreen />} />
        </Routes>
    )
}