import { CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const loadingStyle={
textAlign:"center",
backgroundColor:" #282c34",
display:" flex",
justifyContent:"center",
alignItems:"center",
width: "100%",
height:" 100vh",
}
const Loading = () => {
  return (
        <div style={loadingStyle} className="loading">
        <ClimbingBoxLoader
        loading={true}
        color="#ff7400"
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
      />
        </div>
  );
};

export default Loading;
