import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Dropzone from '../../components/dropzone/Dropzone';
import t from '../../constants/translates';
import { selectedFiles } from '../../redux/file-uploader/fileUploader.selectors';
import { addFiles } from '../../redux/file-uploader/fileUploader.actions';

const FileUploader = ({ getSelectedFiles, addFiles }) => {
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
  getSelectedFiles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

const mapStateToProps = createStructuredSelector({
  getSelectedFiles: selectedFiles,
});

const mapDispatchToProps = dispatch => ({
  addFiles: files => dispatch(addFiles(files)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUploader);
