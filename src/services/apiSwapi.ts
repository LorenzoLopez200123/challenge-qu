import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: " https://swapi.dev/api/",
});

const cache = new Map();

export default function apiSwapi() {
  const get = async (
    url: string,
    options: { cacheTime: number },
    page: number | null = null
  ) => {
    const { cacheTime = 300000 } = options;

    if (cache.has(`${url}/${page ? `?page=${page}` : ""}`)) {
      const cachedData = cache.get(`${url}/${page ? `?page=${page}` : ""}`);
      const { timestamp, data } = cachedData ?? {
        timestamp: 0,
        data: undefined,
      };
      const age = Date.now() - timestamp;
      if (age < cacheTime) return data;
    }

    const source = axios.CancelToken.source();

    const promise = api
      .get(`${url}/${page ? `?page=${page}` : ""}`, {
        cancelToken: source.token,
      })
      .then(({ data }: any) => {
        cache.set(url, { timestamp: Date.now(), data });
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
}
