import { TrendingUp, PieChart as PieChartIcon, DollarSign, Home as HomeIcon } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const assetAllocation = [
  { name: "Pension Pots", value: 284000, color: "#1e3a5f" },
  { name: "Property Equity", value: 425000, color: "#3b5f8a" },
  { name: "ISA & Investments", value: 67000, color: "#5a7fa8" },
  { name: "Cash", value: 42000, color: "#a8c5e2" },
];

const pensionAccounts = [
  {
    provider: "Aviva Workplace Pension",
    value: 142000,
    contributions: "£600/month",
    performance: "+8.9%",
    type: "DC",
  },
  {
    provider: "Scottish Widows SIPP",
    value: 87000,
    contributions: "£400/month",
    performance: "+7.2%",
    type: "DC",
  },
  {
    provider: "Old Employer DB Scheme",
    value: 55000,
    contributions: "Closed",
    performance: "£1,200/mo from age 65",
    type: "DB",
  },
];

const investments = [
  {
    account: "Stocks & Shares ISA",
    value: 42000,
    allocation: "Global Equity 80% / Bonds 20%",
    performance: "+14.2%",
  },
  {
    account: "General Investment Account",
    value: 25000,
    allocation: "Individual stocks",
    performance: "+9.8%",
  },
];

const property = [
  {
    address: "Primary Residence",
    value: 625000,
    mortgage: 200000,
    equity: 425000,
    monthlyPayment: "£1,450",
  },
];

export function Wealth() {
  const totalWealth = assetAllocation.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <div className="min-h-full px-12 py-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-2">Wealth</h1>
          <p className="text-[#666666]">Your complete financial picture</p>
        </div>

        {/* Total Wealth Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-10 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#666666] mb-2">Total Net Worth</p>
              <h2 className="text-5xl font-semibold text-[#1a1a1a] mb-2">
                £{totalWealth.toLocaleString()}
              </h2>
              <div className="flex items-center gap-2 text-[#10b981]">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+9.3% this year</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#666666] mb-2">Retirement Goal</p>
              <p className="text-2xl font-semibold text-[#1a1a1a]">£900k</p>
              <p className="text-sm text-[#666666] mt-1">91% achieved</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="h-3 bg-[#f5f5f5] rounded-full overflow-hidden">
              <div className="h-full bg-[#10b981] rounded-full" style={{ width: "91%" }}></div>
            </div>
          </div>
        </div>

        {/* Asset Allocation */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Asset Allocation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={assetAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {assetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `£${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mt-6">
              {assetAllocation.map((asset, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: asset.color }}
                    ></div>
                    <span className="text-sm text-[#666666]">{asset.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#1a1a1a]">
                      £{asset.value.toLocaleString()}
                    </p>
                    <p className="text-xs text-[#999999]">
                      {((asset.value / totalWealth) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Diversification Score</h3>
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#f0f9ff] mb-4">
                <div className="text-center">
                  <p className="text-4xl font-semibold text-[#1e3a5f]">8.2</p>
                  <p className="text-sm text-[#666666]">out of 10</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-[#1a1a1a] mb-2">Well Diversified</p>
              <p className="text-sm text-[#666666]">
                Your portfolio is spread across multiple asset classes
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t border-[rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#666666]">Equity exposure</span>
                <span className="text-sm font-medium text-[#1a1a1a]">62%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#666666]">Fixed income</span>
                <span className="text-sm font-medium text-[#1a1a1a]">8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#666666]">Property</span>
                <span className="text-sm font-medium text-[#1a1a1a]">52%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#666666]">Cash</span>
                <span className="text-sm font-medium text-[#1a1a1a]">5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pension Accounts */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Pension Accounts</h3>
          <div className="space-y-4">
            {pensionAccounts.map((account, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-xl font-semibold text-[#1a1a1a]">{account.provider}</h4>
                      <span className="bg-[#f5f5f5] text-[#666666] text-xs px-3 py-1 rounded-full">
                        {account.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Value</p>
                        <p className="text-2xl font-semibold text-[#1a1a1a]">
                          £{account.value.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Contributions</p>
                        <p className="text-lg font-medium text-[#1a1a1a]">{account.contributions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Performance</p>
                        <p className="text-lg font-medium text-[#10b981]">{account.performance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investments */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">ISA & Investments</h3>
          <div className="space-y-4">
            {investments.map((investment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#1a1a1a] mb-3">{investment.account}</h4>
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Value</p>
                        <p className="text-2xl font-semibold text-[#1a1a1a]">
                          £{investment.value.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Allocation</p>
                        <p className="text-sm font-medium text-[#1a1a1a]">{investment.allocation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">This year</p>
                        <p className="text-lg font-medium text-[#10b981]">{investment.performance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Property */}
        <div>
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Property</h3>
          {property.map((prop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8"
            >
              <h4 className="text-xl font-semibold text-[#1a1a1a] mb-6">{prop.address}</h4>
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <p className="text-sm text-[#666666] mb-1">Property Value</p>
                  <p className="text-2xl font-semibold text-[#1a1a1a]">
                    £{prop.value.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#666666] mb-1">Outstanding Mortgage</p>
                  <p className="text-2xl font-semibold text-[#1a1a1a]">
                    £{prop.mortgage.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#666666] mb-1">Equity</p>
                  <p className="text-2xl font-semibold text-[#10b981]">
                    £{prop.equity.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#666666] mb-1">Monthly Payment</p>
                  <p className="text-lg font-medium text-[#1a1a1a]">{prop.monthlyPayment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
