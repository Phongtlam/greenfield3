import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';

injectTapEventPlugin();

const blank = [];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onUpdateInput = this.onUpdateInput.bind(this);
  }

  onUpdateInput(input) {
    this.setState({
      input,
    });
  }

  render() {
    return (
      <div>
        <div>
          <AutoComplete
            hintText="Start typing"
            dataSource={blank}
            searchText={this.state.input}
            onUpdateInput={this.onUpdateInput}
          />
        </div>

        <div>
          <RaisedButton
            label="Search" backgroundColor="rgb(0, 188, 212)"
            labelColor="rgb(255, 255, 255)"
            onTouchTap={() => this.props.onSearch(this.state.input)}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearch: PropTypes.func,
};

export default SearchBar;
