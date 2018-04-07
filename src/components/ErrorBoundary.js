import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  }

  componentDidCatch(error, info) {
    /* eslint no-console: 0 */
    console.log(error, info)
  }

  render() {
    return this.props.children
  }
}
