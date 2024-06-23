import { ProfileScreen } from "modules/profile/ProfileScreen"
import { Navigate, Route, Routes } from "react-router-dom"

export const ProfileRouter = () => {
  return (
    <Routes>
        <Route index element={ <ProfileScreen />} />
        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
