import React from 'react';
import { EventTemplate } from '../../templates/event';

const EventPreview = ({ entry, widgetFor }) => (
  <EventTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default EventPreview;
