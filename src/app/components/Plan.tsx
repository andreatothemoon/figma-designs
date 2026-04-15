import { ChevronRight, TrendingUp, TrendingDown, Check } from "lucide-react";

const scenarios = [
  {
    id: 1,
    name: "Current Plan",
    status: "active",
    retirementAge: 58,
    monthlyIncome: 4850,
    confidence: "High",
    contributions: "£1,200/month",
    outcome: "88% of target",
  },
  {
    id: 2,
    name: "Increase Contributions",
    status: "suggested",
    retirementAge: 57,
    monthlyIncome: 5280,
    confidence: "High",
    contributions: "£1,450/month",
    outcome: "96% of target",
  },
  {
    id: 3,
    name: "Retire Later",
    status: "option",
    retirementAge: 60,
    monthlyIncome: 5650,
    confidence: "Very High",
    contributions: "£1,200/month",
    outcome: "103% of target",
  },
  {
    id: 4,
    name: "Aggressive Growth",
    status: "option",
    retirementAge: 58,
    monthlyIncome: 5120,
    confidence: "Medium",
    contributions: "£1,200/month",
    outcome: "93% of target",
  },
];

const assumptions = [
  { label: "Investment returns", value: "5.5% p.a. (real)", adjustable: true },
  { label: "Inflation", value: "2.5% p.a.", adjustable: true },
  { label: "State Pension age", value: "67", adjustable: false },
  { label: "Life expectancy", value: "90 years", adjustable: true },
  { label: "Tax rate in retirement", value: "20%", adjustable: true },
];

export function Plan() {
  return (
    <div className="min-h-full px-12 py-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-2">Plan</h1>
          <p className="text-[#666666]">Compare scenarios and explore different retirement strategies</p>
        </div>

        {/* Scenarios */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Scenarios</h3>
          <div className="space-y-4">
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                className={`bg-white rounded-2xl shadow-sm border p-8 hover:shadow-md transition-all cursor-pointer group ${
                  scenario.status === "active"
                    ? "border-[#1e3a5f] border-2"
                    : "border-[rgba(0,0,0,0.04)]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-xl font-semibold text-[#1a1a1a]">{scenario.name}</h4>
                      {scenario.status === "active" && (
                        <span className="bg-[#1e3a5f] text-white text-xs px-3 py-1 rounded-full">
                          Active
                        </span>
                      )}
                      {scenario.status === "suggested" && (
                        <span className="bg-[#10b981] text-white text-xs px-3 py-1 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-5 gap-8 mb-4">
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Retirement Age</p>
                        <p className="text-2xl font-semibold text-[#1a1a1a]">{scenario.retirementAge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Monthly Income</p>
                        <p className="text-2xl font-semibold text-[#1a1a1a]">
                          £{scenario.monthlyIncome.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Confidence</p>
                        <p className="text-lg font-semibold text-[#1a1a1a]">{scenario.confidence}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Contributions</p>
                        <p className="text-lg font-semibold text-[#1a1a1a]">{scenario.contributions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#666666] mb-1">Outcome</p>
                        <p className="text-lg font-semibold text-[#1a1a1a]">{scenario.outcome}</p>
                      </div>
                    </div>

                    {scenario.status === "active" && (
                      <div className="flex items-center gap-2 text-sm text-[#10b981]">
                        <Check className="w-4 h-4" />
                        <span>Currently using this scenario</span>
                      </div>
                    )}
                  </div>

                  <button className="text-[#1e3a5f] hover:bg-[#f5f5f5] p-2 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6">Best Case Scenario</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#666666] mb-1">Retirement Age</p>
                <p className="text-3xl font-semibold text-[#1a1a1a]">55</p>
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-1">Monthly Income</p>
                <p className="text-3xl font-semibold text-[#10b981]">£6,200</p>
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-2">Requirements</p>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#10b981]" />
                    7% annual returns
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#10b981]" />
                    Max pension contributions
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#10b981]" />
                    Max ISA allowance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6">Worst Case Scenario</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#666666] mb-1">Retirement Age</p>
                <p className="text-3xl font-semibold text-[#1a1a1a]">63</p>
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-1">Monthly Income</p>
                <p className="text-3xl font-semibold text-[#dc2626]">£3,800</p>
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-2">Factors</p>
                <ul className="space-y-2 text-sm text-[#666666]">
                  <li className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#dc2626]" />
                    3% annual returns
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#dc2626]" />
                    Higher inflation (3.5%)
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-[#dc2626]" />
                    Market downturn near retirement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Assumptions */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Planning Assumptions</h3>
          <div className="space-y-4">
            {assumptions.map((assumption, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-[rgba(0,0,0,0.04)] last:border-0"
              >
                <div>
                  <p className="font-medium text-[#1a1a1a]">{assumption.label}</p>
                  {!assumption.adjustable && (
                    <p className="text-xs text-[#999999] mt-1">Fixed by regulation</p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold text-[#1a1a1a]">{assumption.value}</p>
                  {assumption.adjustable && (
                    <button className="text-[#1e3a5f] text-sm hover:underline">Adjust</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
