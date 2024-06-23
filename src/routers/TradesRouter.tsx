import { TradesListScreen } from 'modules/trades'
import { Route, Routes } from 'react-router-dom'

export const TradesRouter = () => {
    return (
        <Routes>
            <Route index element={<TradesListScreen />} />
        </Routes>
    )
}
