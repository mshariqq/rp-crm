
export function DateRange({ label, id, fromValue, toValue, nameStart, nameEnd, className = "", onChangeFrom, onChangeTo }) {
 
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <div className="d-flex gap-2">
        <input
          type="date"
          id={id ? `${id}-start` : undefined}
          name={nameStart}
          className={`form-control ${className}`}
          value={fromValue}
          onChange={onChangeFrom}
          placeholder="Start Date"
        />
        <input
          type="date"
          id={id ? `${id}-end` : undefined}
          name={nameEnd}
          className={`form-control ${className}`}
          value={toValue}
          onChange={onChangeTo}
          placeholder="End Date"
        />
      </div>
    </div>
  );
}
