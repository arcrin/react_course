export default function UserInput({onValueChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" id="initial-investment" required defaultValue={0} onChange={onValueChange}/>
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" id="annual-investment" required defaultValue={0} onChange={onValueChange}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" id="expected-return" required defaultValue={0} onChange={onValueChange}/>
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" required defaultValue={0} onChange={onValueChange}/>
        </p>
      </div>
    </section>
  );
}
