import PropTypes from 'prop-types';
const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <label>
        Filter
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
          placeholder="Search..."
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
