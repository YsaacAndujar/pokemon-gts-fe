export interface IProfile {
    id: number,
    username: string
}

export interface IPasswordRequest {
    oldPassword: string
    newPassword: string
}