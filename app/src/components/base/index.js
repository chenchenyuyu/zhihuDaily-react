import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from './config';
import CYError from './error';

class CYComponent extends Component {
  constructor(props) {
    super(props);
    this.autoBind('handleClick');
    this.initStateFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.initStateFromProps(nextProps);
  }

  // raise an error
  raiseError(code, message) {
    const e = new CYError(code, message);
    if (this.props.onError) {
      this.props.onError(e);
    } else {
      throw e;
    }

  }

  // init internal state from props
  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  initStateFromProps(props) {

  }

  classname(name, stateClasses = {}) {
    const classNames = [`${config.cssPrefix}${name}`];
    Object.keys(stateClasses).forEach((stateName) => {
      if (stateClasses[stateName]
      ) {
        classNames.push(stateName);
      }
    });

    if (this.props.className) {
      classNames.push(this.props.className);
    }
    return classNames.join(' ');
  }

  /**
   * bind event handler for performance reason
   * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
   */
  autoBind(...args) {
    for (let i = 0; i < args.length; i += 1) {
      const func = this[args[i]];
      if (func) {
        this[args[i]] = func.bind(this);
      }
    }
  }

  /**
   * store an DOM element in refs
   * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
   */
  storeRef(name) {
    return (c) =>
    {
      this[name] = c;
    };
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick(this);
    }
  }

  render() {
    return <div />;
  }
  }

  CYComponent.defaultProps = {
    onClick: () => {},
    onError : null,
    className: '',
  };

  CYComponent.propTypes = {
    onClick: PropTypes.func,
    onError: PropTypes.func,
    className: PropTypes.string,
  };

  export default CYComponent;
