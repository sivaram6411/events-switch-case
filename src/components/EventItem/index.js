// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, updateStatus, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const onClickStatus = () => {
    updateStatus(id)
  }
  const updateClass = isActive ? 'event-border-color' : 'event-item-image'

  return (
    <li className="list-item">
      <button
        type="button"
        className="list-event-button"
        onClick={onClickStatus}
      >
        <img src={imageUrl} alt="event" className={updateClass} />
      </button>
      <p className="event-item-name">{name}</p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}

export default EventItem
