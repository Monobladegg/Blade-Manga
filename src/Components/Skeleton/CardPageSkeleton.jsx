import React from "react"
import ContentLoader from "react-content-loader"

const colors = {
  bgColor1: "#FFD3AC",
  bgColor2: "#fff"
}

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={990}
    height={420}
    viewBox="0 0 990 420"
    backgroundColor={colors.bgColor1}
    foregroundColor={colors.bgColor3}
    {...props}
  >
    <circle cx="31" cy="31" r="20" /> 
    <rect x="0" y="0" rx="15" ry="15" width="400" height="420" />
    <rect x="565" y="10" rx="10" ry="10" width="260" height="400" />
  </ContentLoader>
)

export default MyLoader
