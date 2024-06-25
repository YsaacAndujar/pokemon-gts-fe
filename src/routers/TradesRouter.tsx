import { GlobalTradesDetailsScreen, MyTradeDetailsScreen, TradesScreen } from 'modules/trades'
import { Navigate, Route, Routes } from 'react-router-dom'

export const TradesRouter = () => {
    return (
        <Routes>
            <Route index element={<TradesScreen />} />
            <Route path='my-trades/:id' element={<MyTradeDetailsScreen />} />
            <Route path='global-trades/:id' element={<GlobalTradesDetailsScreen />} />
            <Route path="*" element={<Navigate to="/trades"/>} />
        </Routes>
    )
}
