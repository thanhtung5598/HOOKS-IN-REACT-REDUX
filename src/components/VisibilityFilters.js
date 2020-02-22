import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from './../redux/actions/index';
import { VISIBILITY_FILTERS } from './../redux/constanst/visibilityFilter';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {
        Object.keys(VISIBILITY_FILTERS).map(filterKey => {
          const currentFilter = VISIBILITY_FILTERS[filterKey];
          return (
            <span
              key={`visibility-filter-${currentFilter}`}
              className={
                classnames(
                  'filter',
                  currentFilter === activeFilter && "filter--active"
                )}
              onClick={() => {
                setFilter(currentFilter);
              }}
            >
              {currentFilter}
            </span>
          )
        })
      }
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    activeFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: (filter) => {
      dispatch(setFilter(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters);
