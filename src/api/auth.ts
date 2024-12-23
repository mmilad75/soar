import apiClient from '.';

export interface IUserInfo {
  id: string;
  fullName: string;
  username: string;
  email: string;
  dob?: string;
  presentAddress?: string;
  permanentAddress?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  avatar?: string;
}

interface IFetchUserResponse {
  user: IUserInfo[];
}

type FetchUser = () => Promise<IFetchUserResponse>;

const fetchUser: FetchUser = async () => {
  const response = await apiClient.get('/profile');

  return {
    user: response.data.user,
  };
};

const authApi = {
  fetchUser,
};

export default authApi;
