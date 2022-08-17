import { useGetData } from './useGetData';

export function useGetSessions() {
  const sessions = useGetData([],'/sessions')
  return sessions;
}