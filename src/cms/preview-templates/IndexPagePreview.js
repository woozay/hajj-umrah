import React from 'react'
import { IndexPage } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPage
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        about={data.about}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
