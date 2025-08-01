import { useState } from "react";

export default function PlumbingBidEstimator() {
  const [hotRun, setHotRun] = useState(35);
  const [coldRun, setColdRun] = useState(35);
  const [angleStops, setAngleStops] = useState(2);
  const [supplyLines, setSupplyLines] = useState(2);
  const [showerAddOn, setShowerAddOn] = useState(false);
  const [total, setTotal] = useState(null);

  const MATERIAL_COST_PER_FOOT = 1.5;
  const ANGLE_STOP_COST = 12;
  const SUPPLY_LINE_COST = 10;
  const SHOWER_CARTRIDGE_COST = 80;
  const LABOR_COST_PER_HOUR = 85;
  const HOURS_ESTIMATE = 5;

  const calculateEstimate = () => {
    const materialCost = (hotRun + coldRun) * MATERIAL_COST_PER_FOOT;
    const fixtureCost = (angleStops * ANGLE_STOP_COST) + (supplyLines * SUPPLY_LINE_COST);
    const addOnCost = showerAddOn ? SHOWER_CARTRIDGE_COST : 0;
    const laborCost = LABOR_COST_PER_HOUR * HOURS_ESTIMATE;
    const totalEstimate = materialCost + fixtureCost + addOnCost + laborCost;
    setTotal(totalEstimate.toFixed(2));
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1>Bid Master Estimator</h1>
      <label>Hot Water Line Run (ft)</label>
      <input type="number" value={hotRun} onChange={e => setHotRun(+e.target.value)} /><br />
      <label>Cold Water Line Run (ft)</label>
      <input type="number" value={coldRun} onChange={e => setColdRun(+e.target.value)} /><br />
      <label>Angle Stops</label>
      <input type="number" value={angleStops} onChange={e => setAngleStops(+e.target.value)} /><br />
      <label>Supply Lines</label>
      <input type="number" value={supplyLines} onChange={e => setSupplyLines(+e.target.value)} /><br />
      <label>
        <input
          type="checkbox"
          checked={showerAddOn}
          onChange={e => setShowerAddOn(e.target.checked)}
        />
        Include Shower Cartridge Replacement ($80)
      </label><br />
      <button onClick={calculateEstimate}>Calculate Bid</button>
      {total && <p>Estimated Total: ${total}</p>}
    </div>
  );
}
