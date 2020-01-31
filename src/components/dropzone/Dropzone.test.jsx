import React from 'react';
import { shallow } from 'enzyme';

import { DropzoneArea } from 'material-ui-dropzone';
import Dropzone from './Dropzone';

describe('<Dropzone />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dropzone />);
  });

  it('renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Dropzone remove message return correct value', () => {
    const MOCK_MESSAGE = 'Le fichier fileName a été supprimée.';
    expect(
      wrapper
        .find(DropzoneArea)
        .props()
        .getFileRemovedMessage('fileName'),
    ).toEqual(MOCK_MESSAGE);
  });

  it('Dropzone reject message return correct value', () => {
    const MOCK_MESSAGE = 'Le fichier fileName a été rejeté.';
    expect(
      wrapper
        .find(DropzoneArea)
        .props()
        .getDropRejectMessage({ name: 'fileName' }),
    ).toEqual(MOCK_MESSAGE);
  });

  it('Dropzone FileLimitExceed message return correct value', () => {
    const MOCK_MESSAGE =
      'Vous avez dépassé le nombre maximum autorisé de fichiers. Seulement fileName permis.';
    expect(
      wrapper
        .find(DropzoneArea)
        .props()
        .getFileLimitExceedMessage('fileName'),
    ).toEqual(MOCK_MESSAGE);
  });

  it('Dropzone add message return correct value', () => {
    const MOCK_MESSAGE = 'Le fichier fileName a été ajouté avec succès.';
    expect(
      wrapper
        .find(DropzoneArea)
        .props()
        .getFileAddedMessage('fileName'),
    ).toEqual(MOCK_MESSAGE);
  });
});
