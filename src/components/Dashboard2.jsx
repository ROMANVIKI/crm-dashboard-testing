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

const Dashboard2 = () => {
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
    bookings: 23,
    monthlyLeads: 347,
    leadConversion: '18.2%',
    maintenanceRequests: 45,
    supportTickets: 12,
    contractsSigned: 28,
    overduePayments: 8
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

  const leadPipelineData = [
    { source: 'Website', leads: 45, conversions: 8, rate: '17.8%' },
    { source: 'Referrals', leads: 38, conversions: 12, rate: '31.6%' },
    { source: 'Social Media', leads: 29, conversions: 4, rate: '13.8%' },
    { source: 'Walk-ins', leads: 22, conversions: 6, rate: '27.3%' },
    { source: 'Property Portals', leads: 34, conversions: 7, rate: '20.6%' }
  ];

  const upcomingTasks = [
    { type: 'handover', title: 'Marina Heights Unit 1205 Handover', client: 'Ahmed Al-Mansouri', date: 'Today, 2:00 PM', priority: 'high' },
    { type: 'visit', title: 'Site Visit - Downtown Square', client: 'Sarah Johnson', date: 'Tomorrow, 10:00 AM', priority: 'medium' },
    { type: 'contract', title: 'Contract Signing - JLT Residence', client: 'David Smith', date: 'Dec 28, 3:00 PM', priority: 'high' },
    { type: 'payment', title: 'Follow-up Payment Reminder', client: 'Fatima Hassan', date: 'Dec 29, 11:00 AM', priority: 'medium' }
  ];

  const financialSummary = [
    { metric: 'Received This Month', amount: '15.2M AED', change: '+12%', type: 'positive' },
    { metric: 'Pending Collections', amount: '8.5M AED', change: '+5%', type: 'neutral' },
    { metric: 'Overdue Payments', amount: '1.2M AED', change: '-8%', type: 'negative' },
    { metric: 'Commission Earned', amount: '2.8M AED', change: '+15%', type: 'positive' }
  ];

  const propertyTypes = [
    { type: 'Apartment', count: 834, percentage: 67 },
    { type: 'Villa', count: 234, percentage: 19 },
    { type: 'Townhouse', count: 123, percentage: 10 },
    { type: 'Commercial', count: 57, percentage: 4 }
  ];

  const recentContracts = [
    { id: 'CON-2024-0156', client: 'Mohammed Al-Rashid', property: 'Marina Heights', unit: '1205', value: '1.2M AED', status: 'signed' },
    { id: 'CON-2024-0157', client: 'Lisa Anderson', property: 'Downtown Square', unit: '805', value: '950K AED', status: 'pending' },
    { id: 'CON-2024-0158', client: 'Omar Abdullah', property: 'Business Bay', unit: '1456', value: '1.5M AED', status: 'signed' }
  ];

  const maintenanceOverview = [
    { category: 'Plumbing', open: 12, resolved: 28, pending: 5 },
    { category: 'Electrical', open: 8, resolved: 15, pending: 3 },
    { category: 'HVAC', open: 15, resolved: 32, pending: 7 },
    { category: 'General', open: 10, resolved: 25, pending: 4 }
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

  const topAgents = [
    { name: 'Mohammed Al-Rashid', sales: '12.5M AED', deals: 18, rating: 4.9 },
    { name: 'Fatima Hassan', sales: '10.2M AED', deals: 15, rating: 4.8 },
    { name: 'Ahmed Khalil', sales: '8.9M AED', deals: 12, rating: 4.7 },
    { name: 'Layla Abdullah', sales: '7.8M AED', deals: 11, rating: 4.6 }
  ];

  const LeadPipelineChart = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Lead Sources & Conversion</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Manage Leads</button>
      </div>
      <div className="space-y-4">
        {leadPipelineData.map((source, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">{source.source}</span>
              <span className="text-sm font-semibold text-green-600">{source.rate}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>{source.leads} leads</span>
              <span>{source.conversions} conversions</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                style={{ width: `${parseFloat(source.rate)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const UpcomingTasks = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Calendar</button>
      </div>
      <div className="space-y-4">
        {upcomingTasks.map((task, index) => (
          <div key={index} className={`border-l-4 pl-4 py-2 ${task.priority === 'high' ? 'border-red-400 bg-red-50' :
            task.priority === 'medium' ? 'border-yellow-400 bg-yellow-50' : 'border-green-400 bg-green-50'
            }`}>
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">{task.title}</h4>
              <span className={`px-2 py-1 text-xs rounded-full ${task.priority === 'high' ? 'bg-red-100 text-red-700' :
                task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                }`}>
                {task.priority}
              </span>
            </div>
            <p className="text-sm text-gray-600">{task.client}</p>
            <p className="text-xs text-gray-500 mt-1">{task.date}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const FinancialSummary = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Financial Summary</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Reports</button>
      </div>
      <div className="space-y-4">
        {financialSummary.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <div>
              <p className="text-sm font-medium text-gray-900">{item.metric}</p>
              <p className="text-lg font-bold text-gray-900">{item.amount}</p>
            </div>
            <div className={`flex items-center space-x-1 ${item.type === 'positive' ? 'text-green-600' :
              item.type === 'negative' ? 'text-red-600' : 'text-gray-600'
              }`}>
              {item.type === 'positive' && <ArrowUp className="w-4 h-4" />}
              {item.type === 'negative' && <ArrowDown className="w-4 h-4" />}
              <span className="text-sm font-medium">{item.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PropertyDistribution = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Property Distribution</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>
      <div className="space-y-4">
        {propertyTypes.map((type, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded ${index === 0 ? 'bg-blue-500' :
                index === 1 ? 'bg-green-500' :
                  index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                }`}></div>
              <span className="font-medium text-gray-900">{type.type}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{type.count} units</span>
              <span className="text-sm font-semibold text-gray-900">{type.percentage}%</span>
            </div>
          </div>
        ))}
        <div className="mt-4 relative">
          <div className="flex rounded-full overflow-hidden h-3">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className={`${index === 0 ? 'bg-blue-500' :
                  index === 1 ? 'bg-green-500' :
                    index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                  }`}
                style={{ width: `${type.percentage}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const RecentContracts = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Contracts</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Contract</th>
              <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Client</th>
              <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Property</th>
              <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Value</th>
              <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentContracts.map((contract, index) => (
              <tr key={index} className="border-b border-gray-50">
                <td className="py-3 px-3 text-sm font-medium text-blue-600">{contract.id}</td>
                <td className="py-3 px-3 text-sm text-gray-900">{contract.client}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{contract.property} {contract.unit}</td>
                <td className="py-3 px-3 text-sm font-semibold text-gray-900">{contract.value}</td>
                <td className="py-3 px-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${contract.status === 'signed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {contract.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const MaintenanceOverview = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Maintenance Overview</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Manage Requests</button>
      </div>
      <div className="space-y-4">
        {maintenanceOverview.map((category, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">{category.category}</h4>
              <span className="text-sm text-gray-500">Total: {category.open + category.resolved + category.pending}</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Open: {category.open}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Resolved: {category.resolved}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">Pending: {category.pending}</span>
              </div>
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

        {/* Expanded KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Monthly Leads"
            value={kpiData.monthlyLeads}
            change="+24.3%"
            changeType="up"
            icon={Target}
            color="bg-blue-500"
          />
          <KPICard
            title="Lead Conversion"
            value={kpiData.leadConversion}
            change="+3.2%"
            changeType="up"
            icon={TrendingUp}
            color="bg-green-500"
          />
          <KPICard
            title="Contracts Signed"
            value={kpiData.contractsSigned}
            change="+18%"
            changeType="up"
            icon={FileText}
            color="bg-purple-500"
          />
          <KPICard
            title="Support Tickets"
            value={kpiData.supportTickets}
            change="-12%"
            changeType="down"
            icon={Phone}
            color="bg-teal-500"
          />
        </div>

        {/* Third Row KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Maintenance Requests"
            value={kpiData.maintenanceRequests}
            change="+5%"
            changeType="up"
            icon={AlertTriangle}
            color="bg-orange-500"
          />
          <KPICard
            title="Overdue Payments"
            value={kpiData.overduePayments}
            change="-8%"
            changeType="down"
            icon={Clock}
            color="bg-red-500"
          />
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
            color="bg-pink-500"
          />
        </div>

        {/* Comprehensive Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Section - 2 columns */}
          <div className="xl:col-span-2 space-y-8">
            <InventoryTable />
            <RecentContracts />
            <LeadPipelineChart />
          </div>

          {/* Middle Section - 1 column */}
          <div className="space-y-8">
            <QuickActions />
            <PropertyDistribution />
            <FinancialSummary />
          </div>

          {/* Right Section - 1 column */}
          <div className="space-y-8">
            <UpcomingTasks />
            <TopAgents />
            <MaintenanceOverview />
            <ActivityFeed />
          </div>
        </div>

        {/* Additional Bottom Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProjectProgress />
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-700">Avg. Sale Time</p>
                    <p className="text-2xl font-bold text-blue-900">45 days</p>
                  </div>
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-700">Customer Satisfaction</p>
                    <p className="text-2xl font-bold text-green-900">4.8/5</p>
                  </div>
                  <Star className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-700">Revenue Per Unit</p>
                    <p className="text-2xl font-bold text-purple-900">1.1M AED</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-orange-700">Market Share</p>
                    <p className="text-2xl font-bold text-orange-900">12.5%</p>
                  </div>
                  <Activity className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
