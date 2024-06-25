import { RequestsScreen } from 'modules/requests'
import { Route, Routes } from 'react-router-dom'

export const RequestsRouter = () => {
  return (
    <Routes>
            <Route index element={<RequestsScreen />} />
        </Routes>
  )
}
