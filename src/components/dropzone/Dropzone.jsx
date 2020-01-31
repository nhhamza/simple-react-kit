import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import style from './style.scss';
import { acceptedFiles } from '../../constants/ui.constants';
import t from '../../constants/translates';

const Dropzone = props => {
  const getFileAddedMessage = fileName => {
    return t.formatString(t.fileUploader.fileAddedMessage, { fileName });
  };
  const getFileLimitExceedMessage = filesLimit => {
    return t.formatString(t.fileUploader.fileLimitExceedMessage, {
      filesLimit,
    });
  };
  const getFileRemovedMessage = fileName => {
    return t.formatString(t.fileUploader.fileRemovedMessage, {
      fileName,
    });
  };
  const getDropRejectMessage = file => {
    return t.formatString(t.fileUploader.dropRejectMessage, {
      fileName: file.name,
    });
  };

  return (
    <DropzoneArea
      {...props}
      dropzoneClass={style.dropzone}
      acceptedFiles={acceptedFiles}
      filesLimit={15}
      dropzoneParagraphClass={style.paragraph}
      showFileNames
      getFileAddedMessage={getFileAddedMessage}
      getFileLimitExceedMessage={getFileLimitExceedMessage}
      getFileRemovedMessage={getFileRemovedMessage}
      getDropRejectMessage={getDropRejectMessage}
    />
  );
};

export default Dropzone;
