import React, {useEffect} from 'react'

export default function renderDeviceSettings() {
  useEffect(() => {
    renderDeviceSettings();
  }, [])
  const renderDeviceSettings = () => {
    if (window.innerWidth < 700) {
      return (
        <div className={'conditional-ui-settings'}>
          <h3>Notify Mobile Positioning</h3>
          <button
            className={`bn-demo-button ${
              mobilePosition === 'top'
                ? 'selected-toggle-btn'
                : 'unselected-toggle-btn'
            }`}
            onClick={() => {
              setMobilePosition('top')
              notify.config({ mobilePosition: 'top' })
            }}
          >
            Top
          </button>
          <button
            className={`bn-demo-button ${
              mobilePosition === 'bottom'
                ? 'selected-toggle-btn'
                : 'unselected-toggle-btn'
            }`}
            onClick={() => {
              setMobilePosition('bottom')
              notify.config({ mobilePosition: 'bottom' })
            }}
          >
            Bottom
          </button>
        </div>
      )
    }
  }

    return (
        <div>
            
        </div>
    )
}
