import { ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";

const actions = [
  {
    id: 1,
    title: "Increase pension by £250/month",
    description: "Boost your workplace pension contributions to maximize employer match and tax relief",
    impact: "+£430/month in retirement",
    secondaryImpact: "Retire 1 year earlier",
    effort: "Low",
    timeToComplete: "5 minutes",
    status: "recommended",
    category: "High Impact",
  },
  {
    id: 2,
    title: "Max out ISA allowance",
    description: "Use remaining £8,400 allowance this tax year for tax-free growth",
    impact: "+£280/month in retirement",
    secondaryImpact: "Tax-free withdrawals",
    effort: "Low",
    timeToComplete: "10 minutes",
    status: "recommended",
    category: "High Impact",
  },
  {
    id: 3,
    title: "Consolidate old pensions",
    description: "Move 2 old pension pots into your current scheme to reduce fees and simplify management",
    impact: "Save £1,200/year in fees",
    secondaryImpact: "+£180/month in retirement",
    effort: "Medium",
    timeToComplete: "2-3 weeks",
    status: "pending",
    category: "Cost Saving",
  },
  {
    id: 4,
    title: "Review investment allocation",
    description: "Your equity allocation is high for someone planning to retire in 10 years",
    impact: "Reduce risk",
    secondaryImpact: "Protect against market volatility",
    effort: "Low",
    timeToComplete: "15 minutes",
    status: "pending",
    category: "Risk Management",
  },
  {
    id: 5,
    title: "Salary sacrifice setup",
    description: "Convert part of your salary to pension contributions for tax efficiency",
    impact: "Save £1,800/year in tax",
    secondaryImpact: "+£240/month in retirement",
    effort: "Low",
    timeToComplete: "Contact HR",
    status: "in-progress",
    category: "Tax Efficiency",
  },
  {
    id: 6,
    title: "Check State Pension forecast",
    description: "Verify your National Insurance record and projected State Pension",
    impact: "Confirm £900/month",
    secondaryImpact: "Identify any gaps",
    effort: "Very Low",
    timeToComplete: "5 minutes",
    status: "completed",
    category: "Planning",
  },
  {
    id: 7,
    title: "Set up emergency fund",
    description: "You have £42k in cash - consider moving excess to higher interest account",
    impact: "Earn +£45/month interest",
    secondaryImpact: "Optimize liquidity",
    effort: "Low",
    timeToComplete: "20 minutes",
    status: "pending",
    category: "Optimization",
  },
];

const categories = [
  { name: "All", count: 7 },
  { name: "High Impact", count: 2 },
  { name: "Cost Saving", count: 1 },
  { name: "Tax Efficiency", count: 1 },
  { name: "Risk Management", count: 1 },
];

export function Actions() {
  const recommendedCount = actions.filter((a) => a.status === "recommended").length;
  const inProgressCount = actions.filter((a) => a.status === "in-progress").length;
  const completedCount = actions.filter((a) => a.status === "completed").length;

  return (
    <div className="min-h-full px-12 py-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-2">Actions</h1>
          <p className="text-[#666666]">Personalized steps to optimize your retirement plan</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#fef3f2] rounded-lg flex items-center justify-center">
                <Circle className="w-5 h-5 text-[#dc2626]" />
              </div>
              <h4 className="text-lg font-semibold text-[#1a1a1a]">Recommended</h4>
            </div>
            <p className="text-4xl font-semibold text-[#1a1a1a]">{recommendedCount}</p>
            <p className="text-sm text-[#666666] mt-1">High-priority actions</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#fef9f3] rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#d97706]" />
              </div>
              <h4 className="text-lg font-semibold text-[#1a1a1a]">In Progress</h4>
            </div>
            <p className="text-4xl font-semibold text-[#1a1a1a]">{inProgressCount}</p>
            <p className="text-sm text-[#666666] mt-1">Currently working on</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#f0fdf4] rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
              </div>
              <h4 className="text-lg font-semibold text-[#1a1a1a]">Completed</h4>
            </div>
            <p className="text-4xl font-semibold text-[#1a1a1a]">{completedCount}</p>
            <p className="text-sm text-[#666666] mt-1">Actions taken</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg transition-colors ${
                index === 0
                  ? "bg-[#1e3a5f] text-white"
                  : "bg-white text-[#666666] border border-[rgba(0,0,0,0.06)] hover:bg-[#f5f5f5]"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Actions List */}
        <div className="space-y-4">
          {actions.map((action) => (
            <div
              key={action.id}
              className={`bg-white rounded-2xl shadow-sm border p-8 hover:shadow-md transition-all group ${
                action.status === "recommended"
                  ? "border-[#1e3a5f] border-l-4"
                  : action.status === "completed"
                  ? "border-[rgba(0,0,0,0.04)] opacity-60"
                  : "border-[rgba(0,0,0,0.04)]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {action.status === "completed" && (
                      <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    )}
                    {action.status === "in-progress" && (
                      <Clock className="w-5 h-5 text-[#d97706]" />
                    )}
                    {action.status === "recommended" && (
                      <Circle className="w-5 h-5 text-[#dc2626]" />
                    )}
                    {action.status === "pending" && (
                      <Circle className="w-5 h-5 text-[#666666]" />
                    )}
                    <h4 className="text-xl font-semibold text-[#1a1a1a]">{action.title}</h4>
                    <span className="bg-[#f5f5f5] text-[#666666] text-xs px-3 py-1 rounded-full">
                      {action.category}
                    </span>
                  </div>

                  <p className="text-[#666666] mb-4">{action.description}</p>

                  <div className="flex items-center gap-8 mb-4">
                    <div>
                      <p className="text-sm text-[#666666] mb-1">Impact</p>
                      <p className="text-lg font-semibold text-[#10b981]">{action.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#666666] mb-1">Additional benefit</p>
                      <p className="text-sm font-medium text-[#1a1a1a]">{action.secondaryImpact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#666666] mb-1">Effort</p>
                      <p className="text-sm font-medium text-[#1a1a1a]">{action.effort}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#666666] mb-1">Time to complete</p>
                      <p className="text-sm font-medium text-[#1a1a1a]">{action.timeToComplete}</p>
                    </div>
                  </div>

                  {action.status === "completed" && (
                    <div className="flex items-center gap-2 text-sm text-[#10b981]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Completed on 2 April 2026</span>
                    </div>
                  )}

                  {action.status === "in-progress" && (
                    <div className="flex items-center gap-2 text-sm text-[#d97706]">
                      <Clock className="w-4 h-4" />
                      <span>Started on 10 April 2026</span>
                    </div>
                  )}
                </div>

                {action.status !== "completed" && (
                  <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-xl hover:bg-[#2d4a72] transition-all flex items-center gap-2 group-hover:gap-3">
                    {action.status === "in-progress" ? "Continue" : "Start"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 mt-8">
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Total Potential Impact</h3>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-[#666666] mb-2">Additional monthly income in retirement</p>
              <p className="text-4xl font-semibold text-[#10b981]">+£1,130</p>
            </div>
            <div>
              <p className="text-sm text-[#666666] mb-2">Annual tax savings</p>
              <p className="text-4xl font-semibold text-[#10b981]">£1,800</p>
            </div>
            <div>
              <p className="text-sm text-[#666666] mb-2">Fee savings per year</p>
              <p className="text-4xl font-semibold text-[#10b981]">£1,200</p>
            </div>
          </div>
          <p className="text-sm text-[#666666] mt-6">
            By completing all recommended actions, you could retire 2 years earlier with higher income
          </p>
        </div>
      </div>
    </div>
  );
}
