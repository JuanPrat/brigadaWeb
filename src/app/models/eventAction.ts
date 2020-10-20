import { CalendarEvent } from "./calendarEvent";

export interface EventAction {
    label: string;
    cssClass?: string;
    onClick({event}: {event: CalendarEvent}): any;
  }