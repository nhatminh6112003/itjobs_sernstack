import { CSSProperties } from "react";
import SyncLoader  from "react-spinners/SyncLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const loadingStyle= {
textAlign:"center",
backgroundColor:" #ffff",
display:" flex",
justifyContent:"center",
alignItems:"center",
width: "100%",
height:" 100vh",
}
const Loading = () => {
  return (
        <div style={loadingStyle} className="loading">
        <SyncLoader 
        loading={true}
        color="#ff7400"
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
      />
        </div>
  );
};

export default Loading;
