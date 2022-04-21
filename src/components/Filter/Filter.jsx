import PropTypes from 'prop-types';
const Filter = ({ changeFilter }) => {
  return (
    <>
      <label>
        Filter
        <input type="text" onChange={changeFilter} placeholder="Search..." />
      </label>
    </>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
