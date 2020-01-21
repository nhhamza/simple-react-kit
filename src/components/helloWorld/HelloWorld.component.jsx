import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { upStart, downStart } from '../../redux/up-down/up-down.actions';
import { selectUpDownNumber } from '../../redux/up-down/up-down.selectors';
import t from '../../constants/translates';

const HelloWorld = ({ upStart, downStart, number }) => (
  <>
    <p>{t.formatString(t.counter.numbers, { number })}</p>
    <button className="button button__up" type="button" onClick={upStart}>
      +1
    </button>
    <button className="button button__down" type="button" onClick={downStart}>
      -1
    </button>
  </>
);

HelloWorld.propTypes = {
  upStart: PropTypes.func,
  downStart: PropTypes.func,
  number: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  number: selectUpDownNumber,
});

const mapDispatchToProps = dispatch => ({
  upStart: () => dispatch(upStart()),
  downStart: () => dispatch(downStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
