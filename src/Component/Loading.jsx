import { ThreeDots } from "react-loader-spinner"
import LoadingStyle from "./Loading.module.css";

// loading website
// https://mhnpd.github.io/react-loader-spinner/docs/components/three-dots

const Loading = () => {
  return (
    <>
      <div className={LoadingStyle.loading}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  )
}

export default Loading