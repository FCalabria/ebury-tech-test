import { render } from "@testing-library/svelte";

import App from "../../src/App.svelte";
import urls from '../../src/business/urls';


describe('App', () => {
  afterEach(() => {
    fetch.resetMocks()
  })
  test('It should render the converter widget', () => {
    const { queryByText } = render(App)
    expect(queryByText('Currency Conversor')).not.toBeNull()
  })
  test('It should load the conversion rates', () => {
    fetch.mockResponse(JSON.stringify({
      success: true,
      rates: {
        EUR: 1.2
      }
    }))
    render(App)
    expect(fetch.mock.calls).toHaveLength(1)
    expect(fetch.mock.calls[0][0]).toMatch(urls.GET_RATES)
  })
})