import {Frame, Navigation, Text} from '@shopify/polaris';
import {Home, Orders, Products} from '@shopify/polaris-icons';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function NavigationExample() {
  return (
    <Frame>
      <Navigation location="/" ariaLabelledBy="label-id">
        <Text as="span" visuallyHidden>
          <p id="label-id">Hidden label</p>
        </Text>
        <Navigation.Section
          items={[
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Home',
              icon: Home,
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Orders',
              icon: Orders,
              badge: '15',
            },
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Products',
              icon: Products,
            },
          ]}
        />
      </Navigation>
    </Frame>
  );
}

export default withPolarisExample(NavigationExample);
