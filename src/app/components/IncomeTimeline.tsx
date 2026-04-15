import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { useState } from "react";

const data = [
  { age: 35, dc: 0, db: 0, state: 0, isa: 0 },
  { age: 40, dc: 0, db: 0, state: 0, isa: 0 },
  { age: 45, dc: 0, db: 0, state: 0, isa: 0 },
  { age: 50, dc: 0, db: 0, state: 0, isa: 0 },
  { age: 55, dc: 0, db: 0, state: 0, isa: 0 },
  { age: 58, dc: 2150, db: 1200, state: 0, isa: 1500 },
  { age: 60, dc: 2200, db: 1200, state: 0, isa: 1450 },
  { age: 65, dc: 2300, db: 1200, state: 0, isa: 1400 },
  { age: 67, dc: 2350, db: 1200, state: 900, isa: 400 },
  { age: 70, dc: 2400, db: 1200, state: 900, isa: 350 },
  { age: 75, dc: 2500, db: 1200, state: 900, isa: 250 },
  { age: 80, dc: 2600, db: 1200, state: 900, isa: 150 },
  { age: 85, dc: 2700, db: 1200, state: 900, isa: 50 },
  { age: 90, dc: 2800, db: 1200, state: 900, isa: 0 },
];

interface TooltipPayload {
  age: number;
  dc: number;
  db: number;
  state: number;
  isa: number;
}

export function IncomeTimeline() {
  const [activeTooltip, setActiveTooltip] = useState<TooltipPayload | null>(null);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as TooltipPayload;
      const total = data.dc + data.db + data.state + data.isa;

      return (
        <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-xl p-4 shadow-lg">
          <p className="font-semibold text-[#1a1a1a] mb-3">Age {data.age}</p>
          <div className="space-y-2">
            <div className="flex justify-between gap-6">
              <span className="text-sm text-[#666666]">DC Pension</span>
              <span className="text-sm font-medium text-[#1a1a1a]">£{data.dc.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-sm text-[#666666]">DB Pension</span>
              <span className="text-sm font-medium text-[#1a1a1a]">£{data.db.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-sm text-[#666666]">State Pension</span>
              <span className="text-sm font-medium text-[#1a1a1a]">£{data.state.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-sm text-[#666666]">ISA</span>
              <span className="text-sm font-medium text-[#1a1a1a]">£{data.isa.toLocaleString()}</span>
            </div>
            <div className="pt-2 mt-2 border-t border-[rgba(0,0,0,0.06)] flex justify-between gap-6">
              <span className="text-sm font-semibold text-[#1a1a1a]">Total</span>
              <span className="text-sm font-semibold text-[#1a1a1a]">£{total.toLocaleString()}/mo</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorDC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1e3a5f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1e3a5f" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorDB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b5f8a" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b5f8a" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorState" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5a7fa8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5a7fa8" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorISA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a8c5e2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a8c5e2" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
          <XAxis
            dataKey="age"
            stroke="#666666"
            tick={{ fill: "#666666", fontSize: 12 }}
            axisLine={{ stroke: "rgba(0,0,0,0.1)" }}
          />
          <YAxis
            stroke="#666666"
            tick={{ fill: "#666666", fontSize: 12 }}
            axisLine={{ stroke: "rgba(0,0,0,0.1)" }}
            tickFormatter={(value) => `£${value}`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#1e3a5f", strokeWidth: 1, strokeDasharray: "5 5" }} />
          
          <ReferenceLine x={58} stroke="#1e3a5f" strokeDasharray="3 3" strokeWidth={2}>
            <text x={58} y={15} textAnchor="middle" fill="#1e3a5f" fontSize={12} fontWeight={500}>
              Retirement
            </text>
          </ReferenceLine>
          
          <ReferenceLine x={67} stroke="#5a7fa8" strokeDasharray="3 3" strokeWidth={1}>
            <text x={67} y={15} textAnchor="middle" fill="#5a7fa8" fontSize={11}>
              State Pension
            </text>
          </ReferenceLine>

          <Area
            type="monotone"
            dataKey="isa"
            stackId="1"
            stroke="#a8c5e2"
            fill="url(#colorISA)"
            strokeWidth={0}
          />
          <Area
            type="monotone"
            dataKey="state"
            stackId="1"
            stroke="#5a7fa8"
            fill="url(#colorState)"
            strokeWidth={0}
          />
          <Area
            type="monotone"
            dataKey="db"
            stackId="1"
            stroke="#3b5f8a"
            fill="url(#colorDB)"
            strokeWidth={0}
          />
          <Area
            type="monotone"
            dataKey="dc"
            stackId="1"
            stroke="#1e3a5f"
            fill="url(#colorDC)"
            strokeWidth={0}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex justify-center gap-8 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#1e3a5f]"></div>
          <span className="text-sm text-[#666666]">DC Pension</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#3b5f8a]"></div>
          <span className="text-sm text-[#666666]">DB Pension</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#5a7fa8]"></div>
          <span className="text-sm text-[#666666]">State Pension</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#a8c5e2]"></div>
          <span className="text-sm text-[#666666]">ISA Withdrawals</span>
        </div>
      </div>
    </div>
  );
}
