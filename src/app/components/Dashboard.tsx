import { TrendingUp, Shield, Calendar, ArrowRight } from "lucide-react";
import { IncomeTimeline } from "./IncomeTimeline";

export function Dashboard() {
  return (
    <div className="min-h-full px-12 py-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-2">Your Retirement Plan</h1>
          <p className="text-[#666666]">Last updated: 14 April 2026</p>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-10 mb-8 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f5f5f5] rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-[#666666]">Current Plan</span>
              </div>
              <h2 className="text-6xl font-semibold text-[#1a1a1a] mb-3">
                £4,850<span className="text-3xl text-[#666666]"> / month</span>
              </h2>
              <p className="text-lg text-[#666666] mb-1">at age 58</p>
              <p className="text-sm text-[#999999]">After tax, in today's money</p>
            </div>

            <div className="flex gap-6">
              <div className="text-right">
                <p className="text-sm text-[#666666] mb-1">Confidence</p>
                <div className="flex items-center gap-2 justify-end">
                  <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                  <span className="text-lg font-semibold text-[#1a1a1a]">High</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#666666] mb-1">Target</p>
                <p className="text-lg font-semibold text-[#1a1a1a]">£5,500/mo</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#666666] mb-1">Gap</p>
                <p className="text-lg font-semibold text-[#dc2626]">-£650/mo</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[rgba(0,0,0,0.06)] mb-6"></div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
                <div className="h-full bg-[#10b981] rounded-full" style={{ width: "88%" }}></div>
              </div>
            </div>
            <span className="text-sm font-medium text-[#666666]">88% of target</span>
          </div>
        </div>

        {/* Income Timeline Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-10 mb-8 hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-8">Income Timeline</h3>
          <IncomeTimeline />
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Retirement Readiness */}
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#f0f9ff] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#1e3a5f]" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                <span className="text-sm font-medium text-[#10b981]">On track</span>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Retirement Readiness</h4>
            <p className="text-3xl font-semibold text-[#1a1a1a] mb-1">Age 58</p>
            <p className="text-sm text-[#666666]">Target retirement age</p>
          </div>

          {/* Guaranteed Income */}
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#f0fdf4] rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#10b981]" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Guaranteed Income</h4>
            <p className="text-3xl font-semibold text-[#1a1a1a] mb-1">£2,100/mo</p>
            <p className="text-sm text-[#666666]">DB Pension + State Pension (from age 67)</p>
          </div>

          {/* Bridge Gap */}
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 hover:shadow-md transition-shadow border-l-4 border-l-[#1e3a5f]">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-[#fef3f2] rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#dc2626]" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-[#1a1a1a] mb-2">Bridge Gap</h4>
            <p className="text-3xl font-semibold text-[#1a1a1a] mb-1">9 years</p>
            <p className="text-sm text-[#666666]">To cover before State Pension</p>
          </div>
        </div>

        {/* Top Actions */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Recommended Actions</h3>
          <div className="space-y-4">
            {/* Action 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#1a1a1a] mb-2">Increase pension by £250/month</h4>
                  <div className="flex items-center gap-6 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#666666]">Impact:</span>
                      <span className="text-lg font-semibold text-[#10b981]">+£430/month in retirement</span>
                    </div>
                    <span className="text-sm text-[#666666]">Retire 1 year earlier</span>
                  </div>
                  <p className="text-sm text-[#666666]">Based on your current employer match and tax relief</p>
                </div>
                <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-xl hover:bg-[#2d4a72] transition-colors flex items-center gap-2 group-hover:gap-3">
                  Try this
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 hover:shadow-md transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-[#1a1a1a] mb-2">Max out ISA allowance</h4>
                  <div className="flex items-center gap-6 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#666666]">Impact:</span>
                      <span className="text-lg font-semibold text-[#10b981]">+£280/month in retirement</span>
                    </div>
                    <span className="text-sm text-[#666666]">Tax-free growth</span>
                  </div>
                  <p className="text-sm text-[#666666]">You have £8,400 remaining allowance this tax year</p>
                </div>
                <button className="bg-[#1e3a5f] text-white px-6 py-3 rounded-xl hover:bg-[#2d4a72] transition-colors flex items-center gap-2 group-hover:gap-3">
                  Try this
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Wealth Summary Strip */}
        <div>
          <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Wealth Summary</h3>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] p-6 hover:shadow-md transition-shadow">
              <p className="text-sm text-[#666666] mb-2">Guaranteed Income</p>
              <p className="text-2xl font-semibold text-[#1a1a1a]">£2,100</p>
              <p className="text-xs text-[#999999] mt-1">per month</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] p-6 hover:shadow-md transition-shadow">
              <p className="text-sm text-[#666666] mb-2">Pension Pots</p>
              <p className="text-2xl font-semibold text-[#1a1a1a]">£284k</p>
              <p className="text-xs text-[#10b981] mt-1">+8.2% this year</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] p-6 hover:shadow-md transition-shadow">
              <p className="text-sm text-[#666666] mb-2">ISA & Investments</p>
              <p className="text-2xl font-semibold text-[#1a1a1a]">£67k</p>
              <p className="text-xs text-[#10b981] mt-1">+12.3% this year</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] p-6 hover:shadow-md transition-shadow">
              <p className="text-sm text-[#666666] mb-2">Cash</p>
              <p className="text-2xl font-semibold text-[#1a1a1a]">£42k</p>
              <p className="text-xs text-[#999999] mt-1">Emergency fund</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-[rgba(0,0,0,0.04)] p-6 hover:shadow-md transition-shadow">
              <p className="text-sm text-[#666666] mb-2">Property</p>
              <p className="text-2xl font-semibold text-[#1a1a1a]">£425k</p>
              <p className="text-xs text-[#999999] mt-1">Equity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
