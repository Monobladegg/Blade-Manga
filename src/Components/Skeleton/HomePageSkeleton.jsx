import React from "react"
import ContentLoader from "react-content-loader"

const colors = {
  bgColor1: "#FFD3AC",
  bgColor2: "#ffc187"
}

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1100}
    height={1000}
    viewBox="0 0 1100 1000"
    backgroundColor={colors.bgColor1}
    foregroundColor={colors.bgColor3}
    {...props}
  >
    <rect x="100" y="0" rx="15" ry="15" width="908" height="270" />
    <rect x="100" y="303" rx="15" ry="15" width="908" height="270" />
  </ContentLoader>
)

export default MyLoader
