
import PropTypes from 'prop-types';

const Filter = ({value,onChange}) => {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </>
    );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
