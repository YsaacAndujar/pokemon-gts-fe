import { HistoryScreen } from "modules/history"
import { Route, Routes } from "react-router-dom"

export const HistoryRouter = () => {
  return (
    <Routes>
            <Route index element={<HistoryScreen />} />
        </Routes>
  )
}
