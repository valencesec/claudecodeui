import { useEffect, useState } from 'react';
import { authenticatedFetch } from '../utils/api';
import { useWebSocket } from '../contexts/WebSocketContext';

export function useYoloStatus() {
  const [isYoloAllowed, setIsYoloAllowed] = useState(false);
  const { latestMessage } = useWebSocket();

  useEffect(() => {
    authenticatedFetch('/api/yolo/status')
      .then((res) => res.json())
      .then((data) => {
        setIsYoloAllowed(data.allowed === true);
      })
      .catch(() => {
        setIsYoloAllowed(false);
      });
  }, []);

  useEffect(() => {
    if (latestMessage?.type === 'yolo_status') {
      setIsYoloAllowed(latestMessage.allowed === true);
    }
  }, [latestMessage]);

  return { isYoloAllowed };
}
