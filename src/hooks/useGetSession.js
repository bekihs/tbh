import { useGetData } from './useGetData';

export function useGetSession(userId,sessionId) {
  const sessions = useGetData([],`/sessions/${userId}/${sessionId}`)
  return sessions;
}