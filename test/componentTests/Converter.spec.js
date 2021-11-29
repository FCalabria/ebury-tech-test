import { render, getAllByRole as globalGetAllByRole, fireEvent } from "@testing-library/svelte";
import userEvent from '@testing-library/user-event'

import Converter from "../../src/widgets/Converter.svelte";
import { availableCurrencies } from "../../src/business/currencies"

describe('Converter', () => {
  const mockRates = {
    GBP: 1.1,
    EUR: 1.2,
    USD: 1.3,
    CHF: 1.4,
    CAD: 1.5,
    CNY: 1.6,
  }
  describe('Template', () => {
    test('It should render the input and selects', () => {
      const { getByRole } = render(Converter, {rates: mockRates})
      const input = getByRole('spinbutton', {name: 'amount'})
      expect(input).toBeVisible()
      const inSelect = getByRole('combobox', {name: 'entry currency'})
      expect(inSelect).toBeVisible()
      const outSelect = getByRole('combobox', {name: 'output currency'})
      expect(outSelect).toBeVisible()
    })
    test('The selects should be populated correctly', () => {
      const { getByRole } = render(Converter, {rates: mockRates})
      const inSelect = getByRole('combobox', {name: 'entry currency'})
      const outSelect = getByRole('combobox', {name: 'output currency'})
      const inOptions = globalGetAllByRole(inSelect, 'option')
      const outOptions = globalGetAllByRole(outSelect, 'option')
      expect(inOptions).toHaveLength(Object.entries(availableCurrencies).length + 1)
      expect(outOptions).toHaveLength(Object.entries(availableCurrencies).length + 1)
    })
  })
  describe('Converting', () => {
    let inSelect, outSelect, getByRole, getByText
    beforeEach(() => {
      const result = render(Converter, {rates: mockRates})
      getByRole = result.getByRole
      getByText = result.getByText
      inSelect = getByRole('combobox', {name: 'entry currency'})
      outSelect = getByRole('combobox', {name: 'output currency'})
    })
    test('Should show the correct converted value', async () => {
      const input = getByRole('spinbutton', {name: 'amount'})
      await userEvent.type(input, '3')
      await userEvent.selectOptions(inSelect, ['GBP'])
      await userEvent.selectOptions(outSelect, ['USD'])
      const result = getByText('3.55')
      expect(result).toBeVisible()
    })
    test('Should show the conversion rate', async () => {
      await userEvent.selectOptions(inSelect, ['GBP'])
      await userEvent.selectOptions(outSelect, ['USD'])
      const result = getByText('Conversion rate is')
      expect(result).toBeVisible()
      expect(result).toHaveTextContent('1.18182')
    })
  })
})