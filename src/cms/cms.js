import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import EventPreview from './preview-templates/EventPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('event', EventPreview);
