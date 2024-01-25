import axios from "axios";
import { AuthUser, useAuthStore } from "../stores/useAuthStore";
import { AUTH_TOKEN_REFRESH_API } from "../config";

export const useHttp = () => {
  const { currentUser, setCurrentUser } = useAuthStore();
  const client = axios.create();
  client.defaults.headers["Accept"] = "application/json";

  client.interceptors.request.use((config) => {
    if (currentUser?.accessToken) {
      config.headers.Authorization = `Bearer ${currentUser?.accessToken}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (response) => { 
      return response;},
    async (error) =>  {
      const origRq = error.config;
      if (error.response.status === 401 && !origRq._retry) {
        origRq._retry = true;
        const success = refreshToken();
        if (await success) {
          return client.request(origRq);
        }
      }
      return Promise.reject(error);
    }
  );

  const setAuthHeaders = () => {
    if (currentUser?.accessToken) {
      client.defaults.headers[
        "Authorization"
      ] = `Bearer ${currentUser?.accessToken}`;
    }
  };

  async function refreshToken() {
    const response = await axios.post(
      AUTH_TOKEN_REFRESH_API,
      {
        accessToken: currentUser?.accessToken,
        refreshToken: currentUser?.refreshToken,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status !== 200) {
      setCurrentUser(null);
      return false;
    }
    setCurrentUser(response.data as AuthUser);
    return true;
  };

  const httpGet = (url: string, params?: any) => {
    return client.get(url, { params });
  };

  const httpPost = (url: string, data: any) => {
    return client.post(url, data);
  };

  const httpPatch = (url: string, data: any) => {
    return client.patch(url, data);
  };

  const httpPut = (url: string, data: any) => {
    return client.put(url, data);
  };

  const httpDelete = async (url: string) => {
    return client.delete(url);
  };

  return { httpGet, httpPost, httpPatch, httpPut, httpDelete };
};
