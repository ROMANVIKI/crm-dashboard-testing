import React, { useState } from 'react';
import {
  Building2,
  Home,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  MapPin,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  Phone,
  Mail,
  ArrowUp,
  ArrowDown,
  Eye,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Zap,
  Crown
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for the dashboard
  const kpiData = {
    totalRevenue: '125.6M AED',
    monthlySales: '15.2M AED',
    totalUnits: 1248,
    availableUnits: 312,
    totalClients: 2847,
    activeLeads: 156,
    siteVisits: 89,
    bookings: 23
  };

  const inventoryData = [
    { type: 'Studio', total: 120, available: 25, sold: 95, reserved: 5 },
    { type: '1BR', total: 340, available: 78, sold: 245, reserved: 17 },
    { type: '2BR', total: 420, available: 125, sold: 275, reserved: 20 },
    { type: '3BR', total: 280, available: 65, sold: 198, reserved: 17 },
    { type: 'Penthouse', total: 45, available: 12, sold: 28, reserved: 5 }
  ];

  const projectData = [
    { name: 'Marina Heights', phase: 'Phase 2', completion: 78, units: 245, sales: '89%' },
    { name: 'Downtown Square', phase: 'Phase 1', completion: 95, units: 180, sales: '76%' },
    { name: 'Business Bay Tower', phase: 'Phase 3', completion: 45, units: 320, sales: '45%' },
    { name: 'JLT Residence', phase: 'Phase 1', completion: 100, units: 150, sales: '100%' }
  ];

  const recentActivities = [
    { type: 'booking', client: 'Ahmed Al-Mansouri', unit: 'Marina Heights - 1205', amount: '1.2M AED', time: '2 hours ago' },
    { type: 'visit', client: 'Sarah Johnson', property: 'Downtown Square', agent: 'Mohammed Ali', time: '4 hours ago' },
    { type: 'payment', client: 'David Smith', amount: '500K AED', installment: '2nd Installment', time: '6 hours ago' },
    { type: 'maintenance', unit: 'JLT Residence - 808', issue: 'AC Repair', priority: 'High', time: '1 day ago' }
  ];

  const topAgents = [
    { name: 'Mohammed Al-Rashid', sales: '12.5M AED', deals: 18, rating: 4.9 },
    { name: 'Fatima Hassan', sales: '10.2M AED', deals: 15, rating: 4.8 },
    { name: 'Ahmed Khalil', sales: '8.9M AED', deals: 12, rating: 4.7 },
    { name: 'Layla Abdullah', sales: '7.8M AED', deals: 11, rating: 4.6 }
  ];

  const KPICard = ({ title, value, change, changeType, icon: Icon, color }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <div className={`flex items-center mt-1 ${changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {changeType === 'up' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                <span className="text-sm font-medium">{change}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const InventoryTable = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Unit Inventory</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Unit Type</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Total</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Available</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Sold</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Reserved</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">{item.type}</td>
                <td className="py-3 px-4 text-gray-600">{item.total}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.available}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">{item.sold}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {item.reserved}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(item.sold / item.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{Math.round((item.sold / item.total) * 100)}% sold</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ProjectProgress = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Project Progress</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Manage Projects</button>
      </div>
      <div className="space-y-4">
        {projectData.map((project, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-900">{project.name}</h4>
                <p className="text-sm text-gray-500">{project.phase} • {project.units} units</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Sales: {project.sales}</p>
                <p className="text-xs text-gray-500">Construction: {project.completion}%</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Construction Progress</span>
                <span>{project.completion}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.completion}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ActivityFeed = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>
      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
            <div className={`p-2 rounded-full ${activity.type === 'booking' ? 'bg-green-100' :
                activity.type === 'visit' ? 'bg-blue-100' :
                  activity.type === 'payment' ? 'bg-purple-100' : 'bg-orange-100'
              }`}>
              {activity.type === 'booking' && <CheckCircle className="w-4 h-4 text-green-600" />}
              {activity.type === 'visit' && <Eye className="w-4 h-4 text-blue-600" />}
              {activity.type === 'payment' && <DollarSign className="w-4 h-4 text-purple-600" />}
              {activity.type === 'maintenance' && <AlertTriangle className="w-4 h-4 text-orange-600" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.client || activity.unit}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {activity.type === 'booking' && `Booked ${activity.unit} for ${activity.amount}`}
                {activity.type === 'visit' && `Site visit to ${activity.property} with ${activity.agent}`}
                {activity.type === 'payment' && `${activity.installment} payment of ${activity.amount}`}
                {activity.type === 'maintenance' && `${activity.issue} - Priority: ${activity.priority}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const TopAgents = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Performing Agents</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>
      <div className="space-y-4">
        {topAgents.map((agent, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{agent.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                {index === 0 && <Crown className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1" />}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{agent.name}</p>
                <div className="flex items-center space-x-2">
                  <Star className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs text-gray-600">{agent.rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{agent.sales}</p>
              <p className="text-xs text-gray-500">{agent.deals} deals</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const QuickActions = () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-sm p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-3 text-left transition-colors">
          <Users className="w-5 h-5 mb-2" />
          <p className="text-sm font-medium">Add Client</p>
        </button>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-3 text-left transition-colors">
          <Calendar className="w-5 h-5 mb-2" />
          <p className="text-sm font-medium">Schedule Visit</p>
        </button>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-3 text-left transition-colors">
          <FileText className="w-5 h-5 mb-2" />
          <p className="text-sm font-medium">Create Contract</p>
        </button>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-3 text-left transition-colors">
          <Home className="w-5 h-5 mb-2" />
          <p className="text-sm font-medium">Add Property</p>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Real Estate CRM</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your properties.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Zap className="w-4 h-4" />
              <span>Generate Report</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AA</span>
              </div>
              <span className="font-medium text-gray-900">Ahmed Ali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Revenue"
            value={kpiData.totalRevenue}
            change="+12.5%"
            changeType="up"
            icon={DollarSign}
            color="bg-green-500"
          />
          <KPICard
            title="Monthly Sales"
            value={kpiData.monthlySales}
            change="+8.2%"
            changeType="up"
            icon={TrendingUp}
            color="bg-blue-500"
          />
          <KPICard
            title="Available Units"
            value={kpiData.availableUnits}
            change="-5.1%"
            changeType="down"
            icon={Home}
            color="bg-purple-500"
          />
          <KPICard
            title="Active Clients"
            value={kpiData.totalClients}
            change="+15.3%"
            changeType="up"
            icon={Users}
            color="bg-orange-500"
          />
        </div>

        {/* Secondary KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Site Visits This Week"
            value={kpiData.siteVisits}
            change="+22%"
            changeType="up"
            icon={MapPin}
            color="bg-indigo-500"
          />
          <KPICard
            title="New Bookings"
            value={kpiData.bookings}
            change="+18%"
            changeType="up"
            icon={CheckCircle}
            color="bg-teal-500"
          />
          <KPICard
            title="Active Leads"
            value={kpiData.activeLeads}
            change="+5%"
            changeType="up"
            icon={Target}
            color="bg-pink-500"
          />
          <KPICard
            title="Total Units"
            value={kpiData.totalUnits}
            icon={Building2}
            color="bg-gray-500"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <InventoryTable />
            <ProjectProgress />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <QuickActions />
            <TopAgents />
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
