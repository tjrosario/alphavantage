const request = (url: string, config: any = {}, method: string = 'GET') => {
  let options: any = {
    method,
  };

  const { responseType, ...params } = config;

  options = {
    ...options,
    ...params,
  };

  const path = url;

  options.cache = 'no-store';

  return fetch(path, options).then((response) =>
    responseType === 'text' ? response.text() : response.json()
  );
};

class API {
  delete(url: string, config: any = {}) {
    return request(url, config, 'DELETE');
  }

  get(url: string, config: any = {}) {
    return request(url, config);
  }

  head(url: string, config: any = {}) {
    return fetch(url, {
      method: 'HEAD',
      ...config,
    });
  }

  post(url: string, config: any = {}) {
    return request(url, config, 'POST');
  }

  put(url: string, config: any = {}) {
    return request(url, config, 'PUT');
  }
}

const api = new API();

export default api;
