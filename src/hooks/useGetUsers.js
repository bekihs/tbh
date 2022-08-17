import { useGetData } from './useGetData';

export function useGetUsers() {
  const users = useGetData([],'/users')
  return users;
}