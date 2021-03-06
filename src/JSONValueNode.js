import React, { PropTypes } from 'react';

/**
 * Renders simple values (eg. strings, numbers, booleans, etc)
 */

const JSONValueNode = ({
  nodeType,
  styling,
  labelRenderer,
  keyPath,
  valueRenderer,
  value,
  valueGetter,
  checkedState,
  handleChange
}) => (

  <li
    {...styling('value', nodeType, keyPath)}
  >
    <input type='checkbox' value={value || ''}
      id={labelRenderer(...keyPath)}
      checked={checkedState}
      onChange={handleChange} />
    <label {...styling(['label', 'valueLabel'], nodeType, keyPath)}>
      {labelRenderer(...keyPath)}:
    </label>
    <span {...styling('valueText', nodeType, keyPath)}>
      {valueRenderer(valueGetter(value), value, ...keyPath)}
    </span>
  </li>
);

JSONValueNode.propTypes = {
  nodeType: PropTypes.string.isRequired,
  styling: PropTypes.func.isRequired,
  labelRenderer: PropTypes.func.isRequired,
  keyPath: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  valueRenderer: PropTypes.func.isRequired,
  value: PropTypes.any,
  valueGetter: PropTypes.func,
  checkedState: PropTypes.any,
  handleChange: PropTypes.func
};

JSONValueNode.defaultProps = {
  valueGetter: value => value,
  handleChange: value => value
};

export default JSONValueNode;
