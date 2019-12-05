import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import mockAxios from 'axios';
import App from './App';

describe('App', () => {
  const mountNode = 'root';
  let wrapper;
  const propertyId = 1;
  const zipCode = 53217;
  const redfinCostEstimate = 2180000;
  const insuranceRate = 0.123;
  const propertyTaxRate = 1.234;

  beforeAll(() => {
    mockAxios.get
      .mockImplementationOnce(() => Promise.resolve({
        data: [{
          propertyId,
          zipCode,
          redfinCostEstimate,
          insuranceRate,
          propertyTaxRate,
        }],
      }))
      .mockImplementationOnce(() => Promise.resolve({
        data: [],
      }));

    wrapper = mount(<App id={propertyId} />,
      { attachTo: document.getElementById(mountNode) });
  });

  afterAll(() => {
    // TODO - check that this functions as intended
    ReactDOM.unmountComponentAtNode(mountNode);
  });

  test('It should mount one component', async () => {
    // update
    const compCount = wrapper.find('div').children().length;
    expect(compCount).toBe(3);
  });
});
