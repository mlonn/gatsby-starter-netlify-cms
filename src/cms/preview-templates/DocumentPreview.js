import React from 'react'
import { DocumentsPageTemplate } from '../../templates/board-page'

const DocumentsPageTemplate = ({ entry, widgetFor }) => (
  <DocumentsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    categories = {entry.getIn(['data', 'categories'])}
  />
)

export default DocumentsPageTemplate
