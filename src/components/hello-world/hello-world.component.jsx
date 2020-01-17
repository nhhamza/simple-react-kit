import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { subeStart, bajaStart } from '../../redux/sube-baja/sube-baja.actions';
import { selectSubeBajaNumber } from '../../redux/sube-baja/sube-baja.selectors';

const HelloWorld = ({ subeStart, bajaStart, number }) => (
  <>
    <p>Tipico sube baja número</p>
    <h1>NUMERO: {number}</h1>
    <button className="button button__sube" type="button" onClick={subeStart}>
      +1
    </button>
    <button className="button button__baja" type="button" onClick={bajaStart}>
      -1
    </button>
  </>
);

HelloWorld.propTypes = {
  subeStart: PropTypes.func,
  bajaStart: PropTypes.func,
  number: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  number: selectSubeBajaNumber,
});

const mapDispatchToProps = dispatch => ({
  subeStart: () => dispatch(subeStart()),
  bajaStart: () => dispatch(bajaStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
