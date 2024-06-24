import { CollectionDetailsScreen, CollectionScreen } from 'modules/collection'
import { Navigate, Route, Routes } from 'react-router-dom'

export const CollectionRouter = () => {
    return (
        <Routes>
            <Route index element={<CollectionScreen />} />
            <Route path=':id' element={<CollectionDetailsScreen />} />
            <Route path="*" element={<Navigate to="/collection"/>} />
        </Routes>
    )
}