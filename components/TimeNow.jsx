import {useEffect, useRef} from 'react'

import moment from 'moment';

export default function TimeNow() {
    const dateTimeRef = useRef(null)
    useEffect(() => {
        const secondsTimer = setInterval(() => {
            if (dateTimeRef.current) {
              dateTimeRef.current.innerText = moment(Date.now()).format('L') + " " + moment(Date.now()).format('LTS');
            }
          }, 1000);
          return () => clearInterval(secondsTimer);
      }, []);
    return <span ref={dateTimeRef} />;
}
