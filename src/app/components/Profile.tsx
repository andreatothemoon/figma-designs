import { User, Mail, Phone, MapPin, Calendar, Briefcase, Settings, Bell, Lock, Download } from "lucide-react";

const personalInfo = [
  { label: "Full Name", value: "James Mitchell", icon: User },
  { label: "Email", value: "james.mitchell@email.com", icon: Mail },
  { label: "Phone", value: "+44 7700 900123", icon: Phone },
  { label: "Address", value: "London, United Kingdom", icon: MapPin },
  { label: "Date of Birth", value: "15 March 1968", icon: Calendar },
  { label: "Occupation", value: "Senior Product Manager", icon: Briefcase },
];

const retirementGoals = [
  { label: "Target retirement age", value: "58" },
  { label: "Target monthly income", value: "£5,500" },
  { label: "Life expectancy planning", value: "90 years" },
  { label: "Risk tolerance", value: "Moderate" },
];

const preferences = [
  { label: "Currency", value: "GBP (£)" },
  { label: "Date format", value: "DD/MM/YYYY" },
  { label: "Tax year", value: "UK (6 April - 5 April)" },
];

export function Profile() {
  return (
    <div className="min-h-full px-12 py-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-[#1a1a1a] mb-2">Profile</h1>
          <p className="text-[#666666]">Manage your personal information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-10 mb-8">
          <div className="flex items-start gap-8">
            <div className="w-24 h-24 bg-[#1e3a5f] rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-semibold">JM</span>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-[#1a1a1a] mb-2">James Mitchell</h2>
              <p className="text-[#666666] mb-4">Member since January 2024</p>
              <div className="flex gap-3">
                <button className="bg-[#1e3a5f] text-white px-6 py-2 rounded-lg hover:bg-[#2d4a72] transition-colors">
                  Edit Profile
                </button>
                <button className="bg-white text-[#1e3a5f] border border-[#1e3a5f] px-6 py-2 rounded-lg hover:bg-[#f5f5f5] transition-colors">
                  Change Photo
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#666666] mb-1">Account Status</p>
              <div className="flex items-center gap-2 justify-end">
                <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                <span className="text-lg font-semibold text-[#10b981]">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Personal Information</h3>
            <button className="text-[#1e3a5f] hover:underline">Edit</button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {personalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#fafafa] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#f5f5f5] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#666666]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#666666]">{info.label}</p>
                    <p className="font-medium text-[#1a1a1a]">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Retirement Goals */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">Retirement Goals</h3>
            <button className="text-[#1e3a5f] hover:underline">Edit</button>
          </div>
          <div className="space-y-4">
            {retirementGoals.map((goal, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-[#fafafa] transition-colors"
              >
                <p className="text-[#666666]">{goal.label}</p>
                <p className="text-lg font-semibold text-[#1a1a1a]">{goal.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-[#1e3a5f]" />
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">Preferences</h3>
            </div>
            <div className="space-y-4">
              {preferences.map((pref, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-[rgba(0,0,0,0.04)] last:border-0"
                >
                  <p className="text-sm text-[#666666]">{pref.label}</p>
                  <p className="font-medium text-[#1a1a1a]">{pref.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-6 h-6 text-[#1e3a5f]" />
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-[#1a1a1a]">Email notifications</p>
                  <p className="text-sm text-[#666666]">Monthly updates and insights</p>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-12 h-6 bg-[#d4d4d4] rounded-full peer peer-checked:bg-[#10b981] transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-[#1a1a1a]">Action reminders</p>
                  <p className="text-sm text-[#666666]">Recommended steps</p>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-12 h-6 bg-[#d4d4d4] rounded-full peer peer-checked:bg-[#10b981] transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-[#1a1a1a]">Performance alerts</p>
                  <p className="text-sm text-[#666666]">Market updates</p>
                </div>
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-12 h-6 bg-[#d4d4d4] rounded-full peer peer-checked:bg-[#10b981] transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Data */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-[#1e3a5f]" />
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">Security</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-lg border border-[rgba(0,0,0,0.06)] hover:bg-[#fafafa] transition-colors">
                <p className="font-medium text-[#1a1a1a] mb-1">Change Password</p>
                <p className="text-sm text-[#666666]">Last changed 3 months ago</p>
              </button>
              <button className="w-full text-left p-4 rounded-lg border border-[rgba(0,0,0,0.06)] hover:bg-[#fafafa] transition-colors">
                <p className="font-medium text-[#1a1a1a] mb-1">Two-Factor Authentication</p>
                <p className="text-sm text-[#10b981]">Enabled</p>
              </button>
              <button className="w-full text-left p-4 rounded-lg border border-[rgba(0,0,0,0.06)] hover:bg-[#fafafa] transition-colors">
                <p className="font-medium text-[#1a1a1a] mb-1">Active Sessions</p>
                <p className="text-sm text-[#666666]">View and manage devices</p>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[rgba(0,0,0,0.04)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Download className="w-6 h-6 text-[#1e3a5f]" />
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">Data & Privacy</h3>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-lg border border-[rgba(0,0,0,0.06)] hover:bg-[#fafafa] transition-colors">
                <p className="font-medium text-[#1a1a1a] mb-1">Download Your Data</p>
                <p className="text-sm text-[#666666]">Export all account information</p>
              </button>
              <button className="w-full text-left p-4 rounded-lg border border-[rgba(0,0,0,0.06)] hover:bg-[#fafafa] transition-colors">
                <p className="font-medium text-[#1a1a1a] mb-1">Privacy Settings</p>
                <p className="text-sm text-[#666666]">Manage data sharing preferences</p>
              </button>
              <button className="w-full text-left p-4 rounded-lg border border-[rgba(0,0,0,0.06)] hover:bg-[#fafafa] transition-colors text-[#dc2626]">
                <p className="font-medium mb-1">Delete Account</p>
                <p className="text-sm text-[#666666]">Permanently remove your data</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
