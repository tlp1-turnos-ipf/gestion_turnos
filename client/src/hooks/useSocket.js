import { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";

export const useSocket = (serverPath) => {
  // const socket = useMemo(() => io.connect( serverPath, {transports: ['websocket']} ), [ serverPath ] );

  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState(false);

  const conectarSocket = useCallback(() => {
    const token = localStorage.getItem("token") || "";
    const socketTemp = io.connect(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        authorization: token,
      },
    });

    setSocket(socketTemp);
  }, [serverPath]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => setOnline(true));
  }, [socket]);

  return {
    socket,
    online,
    conectarSocket,
  };
};
