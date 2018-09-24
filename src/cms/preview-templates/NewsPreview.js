import React from 'react'
import { DocumentsPageTemplate } from '../../templates/board-page'

const DocumentsPageTemplate = ({ entry, widgetFor }) => (
  <DocumentsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    description = {entry.getIn(['data', 'description'])}
  />
)

export default DocumentsPageTemplate
