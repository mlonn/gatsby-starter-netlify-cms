import React from 'react'
import { BoardPageTemplate } from '../../templates/board-page'

const BoardPageTemplate = ({ entry, widgetFor }) => (
  <BoardPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    boardMembers = {entry.getIn(['data', 'boardMembers'])}
  />
)

export default BoardPageTemplate
