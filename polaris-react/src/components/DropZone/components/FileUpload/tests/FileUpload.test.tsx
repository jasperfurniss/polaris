import React from 'react';
import {mountWithApp} from 'tests/utilities';
import {Upload} from '@shopify/polaris-icons';

import {Text} from '../../../../Text';
import {DropZoneContext} from '../../../context';
import {FileUpload} from '../FileUpload';
import {uploadArrow as uploadArrowImage} from '../../../images';
import {Icon} from '../../../../Icon';

describe('<FileUpload />', () => {
  const defaultStates = {
    hover: false,
    focused: false,
    disabled: false,
    measuring: false,
    allowMultiple: true,
  };

  describe('measuring', () => {
    it('hides the FileUpload while measuring is true', () => {
      const fileUpload = mountWithApp(
        <DropZoneContext.Provider
          value={{
            size: 'large',
            type: 'file',
            ...defaultStates,
            measuring: true,
          }}
        >
          <FileUpload />
        </DropZoneContext.Provider>,
      );

      expect(fileUpload).toContainReactComponent('div', {
        className: expect.stringContaining('measuring'),
      });
    });
  });

  describe('large', () => {
    it('renders large view', () => {
      const fileUpload = mountWithApp(
        <DropZoneContext.Provider
          value={{size: 'large', type: 'file', ...defaultStates}}
        >
          <FileUpload />
        </DropZoneContext.Provider>,
      );

      expect(fileUpload).not.toContainReactComponent('img', {
        src: uploadArrowImage,
      });
      expect(fileUpload).not.toContainReactComponent(Text);

      expect(fileUpload).toContainReactComponent('div', {
        className: 'Action',
      });
    });
  });

  it('renders medium view', () => {
    const fileUpload = mountWithApp(
      <DropZoneContext.Provider
        value={{size: 'medium', type: 'file', ...defaultStates}}
      >
        <FileUpload />
      </DropZoneContext.Provider>,
    );

    expect(fileUpload).not.toContainReactComponent('img', {
      src: uploadArrowImage,
    });
    expect(fileUpload).not.toContainReactComponent(Text);

    expect(fileUpload).toContainReactComponent('div', {
      className: 'Action',
    });
  });

  it('renders small view', () => {
    const fileUpload = mountWithApp(
      <DropZoneContext.Provider
        value={{size: 'small', type: 'file', ...defaultStates}}
      >
        <FileUpload />
      </DropZoneContext.Provider>,
    );

    expect(fileUpload).toContainReactComponent(Icon, {source: Upload});
  });

  it('sets a default actionTitle if the prop is provided then removed', () => {
    const fileUpload = mountWithApp(
      <DropZoneContext.Provider
        value={{size: 'large', type: 'file', ...defaultStates}}
      >
        <FileUpload actionTitle="Title" />
      </DropZoneContext.Provider>,
    );

    fileUpload.setProps({children: <FileUpload />});

    expect(fileUpload).toContainReactText('Add files');
  });

  it('renders a custom actionHint if the prop is provided', () => {
    const fileUpload = mountWithApp(
      <DropZoneContext.Provider
        value={{size: 'large', type: 'file', ...defaultStates}}
      >
        <FileUpload actionHint="Hint" />
      </DropZoneContext.Provider>,
    );

    expect(fileUpload).toContainReactComponent(Text);
    expect(fileUpload).toContainReactText('Hint');
  });

  it.each([
    [false, 'image', 'Add image'],
    [true, 'image', 'Add images'],
    [false, 'file', 'Add file'],
    [true, 'file', 'Add files'],
  ])(
    'renders texts when allowMultiple is %s and type is %s',
    (allowMultiple, type, expectedActionText) => {
      const fileUpload = mountWithApp(
        <DropZoneContext.Provider
          value={{size: 'large', ...defaultStates, allowMultiple, type}}
        >
          <FileUpload />
        </DropZoneContext.Provider>,
      );

      expect(fileUpload).toContainReactComponent('div', {
        children: expectedActionText,
      });
    },
  );
});
