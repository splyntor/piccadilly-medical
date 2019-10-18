import React from 'react'
import Image from 'gatsby-image'

function NonStretchedImage(props) {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    }
  }

  return <Image {...normalizedProps} />
}

export default NonStretchedImage
