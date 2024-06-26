import { io } from 'socket.io-client'

const URL = import.meta.env.VITE_API_URL
export const socket = io(URL+'history',{
    extraHeaders:{
        Authorization: 'Bearer '+localStorage.getItem("token")
    },
    autoConnect: false
  });