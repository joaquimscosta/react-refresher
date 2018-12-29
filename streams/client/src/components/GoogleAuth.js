import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onSignInClick = () => {
    this.props.signIn(this.auth.currentUser.get().getId())
  }

  onSignOutClick = () => {
    this.props.signOut()
  }

  onAuthChange = isSignedIn => {
    console.log('isSignedIn? ', isSignedIn)
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }
  renderAuthButton = () => {
    return this.props.authenticated ? (
      <button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon" />
        Sign Out
      </button>
    ) : (
      <button className="ui green google button" onClick={this.onSignInClick}>
        <i className="google icon" />
        Sign in with Google
      </button>
    )
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)
