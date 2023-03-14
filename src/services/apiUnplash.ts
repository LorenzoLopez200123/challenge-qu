import axios, { AxiosError } from "axios";

const PUBLIC_API_KEY = "JNKvjRsBhDxui7m4W9bdXggkAzBDPLYgjZYspMCrs8A";

const api = axios.create({
  baseURL: `https://api.unsplash.com/`,
});

const apiUnplash = () => {
  const get = async (search: string) => {
    const source = axios.CancelToken.source();

    const promise = api
      .get(`${search ? `${search}` : ""}` + `&client_id=${PUBLIC_API_KEY}`, {
        cancelToken: source.token,
      })
      .then(({ data }: any) => {
        return data;
      })
      .catch((error: AxiosError) => {
        if (!axios.isCancel(error)) throw error;
      });

    (promise as any).cancel = () =>
      source.cancel("Request was cancelled by user.");

    return promise;
  };

  return { get };
};

export default apiUnplash;
