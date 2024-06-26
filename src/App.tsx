import { notification } from "antd";
import { AuthContextProvider } from "context/auth/authProvider";
import { LoadingContextProvider } from "context/loading";
import { socket } from "helpers/socket";
import { History } from "interfaces/pokemon";
import { useEffect } from "react";
import { AppRouter } from "routers";

function App() {
  useEffect(() => {
    socket.io.opts.query = { token: localStorage.getItem("token") };
    socket.connect();
    socket.on("notification", (hisory:History) => {
      notification.info({
        message:"Your request was accepted!",
        description: `Your ${hisory.myPokemon.name} was traded for ${hisory.hisPokemon.name}`,
      });
    });
    return () => {
      socket.off("notification");
      socket.disconnect();
    };
  }, []);
  return (
    <LoadingContextProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </LoadingContextProvider>
  )
}

export default App
