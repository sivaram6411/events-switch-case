// Write your code here
import './index.css'

const activeRegistrationDetails = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrations} = props

  const returnNoActiveEvent = () => (
    <div className="no-active-container">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const returnYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-image"
      />
      <p className="register-content">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const returnRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-content">
        You have already registered for the event
      </h1>
    </div>
  )

  const returnRegistrationsClosed = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-text">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-soon-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const returnRegistrationStatus = () => {
    switch (activeEventRegistrations) {
      case activeRegistrationDetails.yetToRegister:
        return returnYetToRegister()
      case activeRegistrationDetails.registered:
        return returnRegistered()
      case activeRegistrationDetails.registrationsClosed:
        return returnRegistrationsClosed()
      default:
        return returnNoActiveEvent()
    }
  }

  return <div>{returnRegistrationStatus()}</div>
}

export default ActiveEventRegistrationDetails
