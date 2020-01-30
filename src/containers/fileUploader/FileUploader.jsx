import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Dropzone from '../../components/dropzone/Dropzone';
import t from '../../constants/translates';
import { addFiles } from '../../redux/file-uploader/fileUploader.actions';

const FileUploader = ({ addFiles }) => {
  const [files, setFiles] = useState([]);

  const addFilesHandler = () => {
    addFiles(files);
  };

  const handleChange = files => {
    setFiles({
      files,
    });
  };
  const handleSave = files => {
    setFiles({
      files,
    });
  };

  return (
    <div>
      <Dropzone
        onChange={handleChange}
        onSave={handleSave}
        dropzoneText={t?.fileUploader.textAreaDescription}
      />
      <br />
      <Button
        variant="contained"
        color="secondary"
        className="button button__up"
        type="button"
        onClick={addFilesHandler}
      >
        Suivant
      </Button>
    </div>
  );
};

FileUploader.propTypes = {
  addFiles: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addFiles: files => dispatch(addFiles(files)),
});

export default connect(null, mapDispatchToProps)(FileUploader);
