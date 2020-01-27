import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core';
import style from './style.scss';
import { acceptedFiles } from '../../constants/ui.constants';

const Dropzone = props => {
  return (
    <DropzoneArea
      {...props}
      dropzoneClass={style.dropzone}
      acceptedFiles={acceptedFiles}
      filesLimit={15}
      dropzoneParagraphClass={style.paragraph}
      showFileNames
    />
  );
};

export default Dropzone;
