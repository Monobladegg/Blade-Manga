import React from "react"
import ContentLoader from "react-content-loader"

const colors = {
  bgColor1: "#FFD3AC",
  bgColor2: "#ffc187"
}

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={990}
    height={360}
    viewBox="0 0 990 360"
    backgroundColor={colors.bgColor1}
    foregroundColor={colors.bgColor3}
    {...props}
  >
    <circle cx="31" cy="31" r="20" /> 
    <rect x="0" y="0" rx="15" ry="15" width="350" height="360" />
    <rect x="545" y="79" rx="5" ry="5" width="260" height="212" />
  </ContentLoader>
)

export default MyLoader
