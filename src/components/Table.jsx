import "../style/Table.css";

export const Table = (props) => {
  return (
    <div className="table-card">
      <div className="table-image">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="table-info">
        <h2 style={props.style}>{props.name}</h2>
        <p>{props.address}</p>

        <button
          onClick={() => props.onViewDetails(props)}
          className="btn btn-primary"
        >
          View Details
        </button>

        {props.price ? (
          <p className="table-price">${props.price.toFixed(2)}</p>
        ) : (
          <p className="table-price">Price not available</p>
        )}
      </div>
    </div>
  );
};