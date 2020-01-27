import axios from 'axios';
import api from './api';

jest.mock('axios');

describe('API tests', () => {
  it('should return expected values on getSearchResults', async () => {
    const mockedAnotherAxios = axios;
    const EXPECTED_RESULTS = ['Valencia'];

    mockedAnotherAxios.get.mockResolvedValue({
      data: EXPECTED_RESULTS,
    });

    expect(await api.getSearchResults('val')).toEqual({
      data: EXPECTED_RESULTS,
    });
    expect(mockedAnotherAxios.get).toHaveBeenCalledWith(`getSearchResults`, {
      params: { text: 'val' },
    });
  });
});
