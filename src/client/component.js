import React from 'react';
import { connect } from 'react-redux';

class HelloList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((text, i) =>
            <li key={i}>
              {text}
            </li>
          )}
        </ul>
        <button onClick={e => this.handleClick(e)}>添加</button>
      </div>
    );
  }

  handleClick(e) {
    this.props.dispatch({
      type: 'ADD_ITEM',
      text: parseInt(Math.random() * 1e4)
    });
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps)(HelloList);
