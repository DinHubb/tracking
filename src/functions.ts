import { NAV_CONFIG, PAGE_TIMELINE, HOURS_IN_DAY, type PageKey } from './constants';

export function getNormalizePageHash(): PageKey {
  const hash = window.location.hash.replace(/^#/, '') as PageKey;

  if (hash in NAV_CONFIG) {
    return hash;
  }

  const firstPage = PAGE_TIMELINE as PageKey;
  window.location.hash = firstPage;
  return firstPage;
}

export function generateTimelineItems() {
  const timelineItems = [];

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
    });
  }

  return timelineItems;
}
