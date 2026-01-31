import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface GoogleCalendarButtonProps {
  className?: string;
  isMobile?: boolean; // To help styling if needed, though usually className is enough
}

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (options: any) => void;
      };
    };
  }
}

export function GoogleCalendarButton({ className }: GoogleCalendarButtonProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCalendar = () => {
      if (window.calendar && window.calendar.schedulingButton && targetRef.current) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1TDKt_HrwsDEel_E-aDzTZt_Pe2UIiJpuZGDF4Q6bbQgB8pKK6rxQ0SV_nObzC4w5hklH5Paz1?gv=true',
          color: '#F6BF26', // Matching site theme --primary
          label: "Book Now",
          target: targetRef.current,
        });
      }
    };

    if (document.readyState === 'complete') {
        loadCalendar();
    } else {
        window.addEventListener('load', loadCalendar);
        return () => window.removeEventListener('load', loadCalendar);
    }
  }, []);

  return (
    <div ref={targetRef} className={className} />
  );
}
