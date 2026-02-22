import './HackathonCard.css';

const HackathonCard = ({ event, rank, location, image, isTrophy }) => {
    return (
        <div className={`hackathon-card ${isTrophy ? 'trophy-focus' : ''}`}>
            {image && (
                <div className="hackathon-image-container">
                    <img src={image} alt={`${event} Trophy`} className="hackathon-image" />
                    <div className="image-caption">Winner Moment!</div>
                </div>
            )}
            <div className="hackathon-details">
                <h3 className="hackathon-event">{event}</h3>
                <p className="hackathon-rank">
                    <span className="rank-badge">{rank}</span>
                    {location && <span className="hackathon-location"> @ {location}</span>}
                </p>
            </div>
        </div>
    );
};

export default HackathonCard;
