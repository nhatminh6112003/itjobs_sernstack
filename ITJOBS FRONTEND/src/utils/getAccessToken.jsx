import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
});

const ConnectedComponent = connect(mapStateToProps)