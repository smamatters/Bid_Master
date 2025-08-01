import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SMA Plumbing Bid Estimator</h1>
      <Card>
        <CardContent className="grid gap-4 p-4">
          <div>
            <Label>Hot Water Line Run (ft)</Label>
            <Input type="number" value={hotRun} onChange={e => setHotRun(+e.target.value)} />
          </div>
          <div>
            <Label>Cold Water Line Run (ft)</Label>
            <Input type="number" value={coldRun} onChange={e => setColdRun(+e.target.value)} />
          </div>
          <div>
            <Label>Angle Stops</Label>
            <Input type="number" value={angleStops} onChange={e => setAngleStops(+e.target.value)} />
          </div>
          <div>
            <Label>Supply Lines</Label>
            <Input type="number" value={supplyLines} onChange={e => setSupplyLines(+e.target.value)} />
          </div>
          <div>
            <Label>
              <input
                type="checkbox"
                checked={showerAddOn}
                onChange={e => setShowerAddOn(e.target.checked)}
              />
              <span className="ml-2">Include Shower Cartridge Replacement ($80)</span>
            </Label>
          </div>
          <Button onClick={calculateEstimate}>Calculate Bid</Button>
          {total && <p className="text-xl font-semibold">Estimated Total: ${total}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
