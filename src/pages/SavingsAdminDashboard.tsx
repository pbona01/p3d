import React, { useState, useEffect } from 'react';
import { getLeads, getAllBoxes, formatCurrency } from '../lib/savings-utils';
import { SavingsBox, Lead } from '../types/savings';
import { motion } from 'motion/react';
import { 
  Users, 
  Archive, 
  PiggyBank, 
  Target, 
  Search, 
  Download, 
  ChevronDown, 
  TrendingUp, 
  ArrowUpDown,
  Filter,
  CheckCircle2,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';

export const SavingsAdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [boxes, setBoxes] = useState<SavingsBox[]>([]);
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'lead' | 'converted'>('all');
  const [sortField, setSortField] = useState<'balance' | 'date'>('balance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    setLeads(getLeads());
    setBoxes(getAllBoxes());
  }, []);

  // Stats calculation
  const totalLeads = leads.length;
  const totalBoxes = boxes.length;
  const totalSaved = boxes.reduce((acc, b) => acc + b.balance, 0);
  const activeGoalsCount = boxes.filter(b => b.goal !== null).length;

  // Filter & Search Box List
  const filteredBoxes = boxes.filter(box => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      box.boxId.toLowerCase().includes(query) ||
      box.owner.name.toLowerCase().includes(query) ||
      box.owner.phone.toLowerCase().includes(query) ||
      box.owner.email.toLowerCase().includes(query);
    return matchesSearch;
  }).sort((a, b) => {
    if (sortField === 'balance') {
      return sortOrder === 'desc' ? b.balance - a.balance : a.balance - b.balance;
    } else {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    }
  });

  // Filter & Search Leads List
  const filteredLeads = leads.filter(lead => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      lead.boxId.toLowerCase().includes(query) ||
      lead.name.toLowerCase().includes(query) ||
      lead.phone.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query);
    
    if (statusFilter === 'lead') {
      return matchesSearch && !lead.converted;
    } else if (statusFilter === 'converted') {
      return matchesSearch && lead.converted;
    }
    return matchesSearch;
  });

  const toggleSort = (field: 'balance' | 'date') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const exportLeadsToCSV = () => {
    const headers = ['Name', 'Phone', 'Email', 'Box ID', 'Captured At', 'Status'];
    const rows = leads.map(l => [
      l.name,
      l.phone,
      l.email,
      l.boxId,
      new Date(l.capturedAt).toLocaleDateString(),
      l.converted ? 'Active User' : 'Lead'
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val}"`).join(','))].join('\n');
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `aplund_savings_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getProgressPercentage = (box: SavingsBox) => {
    if (!box.goal) return 0;
    return Math.min(Math.round((box.balance / box.goal.targetAmount) * 100), 100);
  };

  const getLastActivityDate = (box: SavingsBox) => {
    if (box.transactions.length > 0) {
      return new Date(box.transactions[0].date).toLocaleDateString();
    }
    return new Date(box.createdAt).toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-12 font-sans relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.03)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10 pt-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Savings Box <span className="text-[#c9a96e]">Admin</span></h1>
            <p className="text-gray-400 text-sm mt-1">Manage physical wooden savings box leads, registered owners, and live tracking stats.</p>
          </div>
          <button 
            onClick={exportLeadsToCSV}
            className="flex items-center justify-center gap-2 bg-[#c9a96e] text-black hover:scale-105 active:scale-95 transition-transform font-bold px-5 py-3 rounded-xl text-sm"
          >
            <Download className="w-4 h-4" /> Export Leads to CSV
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total Leads</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-1 text-white">{totalLeads}</h3>
            </div>
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Registered Boxes</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-1 text-white">{totalBoxes}</h3>
            </div>
            <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
              <Archive className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Total Saved</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-1 text-[#c9a96e]">{formatCurrency(totalSaved)}</h3>
            </div>
            <div className="p-3 bg-[#c9a96e]/10 border border-[#c9a96e]/20 rounded-full text-[#c9a96e]">
              <PiggyBank className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Active Goals</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-1 text-green-400">{activeGoalsCount}</h3>
            </div>
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
              <Target className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Global Filter Bar */}
        <div className="bg-[#171717] border border-[#262626] rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search leads or boxes by name, phone, email, box ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:border-[#c9a96e] text-sm transition-colors"
            />
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 text-sm">
              <Filter className="w-4 h-4 text-[#c9a96e]" />
              <select 
                value={statusFilter} 
                onChange={(e: any) => setStatusFilter(e.target.value)}
                className="bg-transparent text-white focus:outline-none text-xs md:text-sm font-semibold cursor-pointer"
              >
                <option value="all" className="bg-[#171717]">All Lead Statuses</option>
                <option value="lead" className="bg-[#171717]">Unconverted Leads</option>
                <option value="converted" className="bg-[#171717]">Converted Users</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-table Panel */}
        <div className="grid lg:grid-cols-1 gap-8">
          
          {/* Leads Table Card */}
          <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-[#c9a96e]" /> Lead Logs ({filteredLeads.length})
              </h2>
            </div>

            <div className="overflow-x-auto">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-sm">No leads match your active query.</p>
                </div>
              ) : (
                <table className="w-full text-left text-sm text-gray-300">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 font-semibold">
                      <th className="pb-3 pt-2">Name</th>
                      <th className="pb-3 pt-2">Contact Details</th>
                      <th className="pb-3 pt-2">Box ID</th>
                      <th className="pb-3 pt-2">Captured Date</th>
                      <th className="pb-3 pt-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredLeads.map((lead, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 font-bold text-white">{lead.name}</td>
                        <td className="py-4">
                          <p className="text-xs text-white">{lead.phone}</p>
                          <p className="text-xs text-gray-400">{lead.email}</p>
                        </td>
                        <td className="py-4"><span className="font-mono text-[#c9a96e] bg-[#c9a96e]/10 border border-[#c9a96e]/20 px-2 py-0.5 rounded text-xs">{lead.boxId}</span></td>
                        <td className="py-4 text-xs">{new Date(lead.capturedAt).toLocaleDateString()}</td>
                        <td className="py-4">
                          {lead.converted ? (
                            <span className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                              Converted
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-[#c9a96e]/10 border border-[#c9a96e]/20 text-[#c9a96e] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full animate-pulse">
                              Lead (Scanned)
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Registered Boxes Table Card */}
          <div className="bg-[#171717] border border-[#262626] rounded-2xl p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Archive className="w-5 h-5 text-[#c9a96e]" /> Active Boxes & Performance ({filteredBoxes.length})
              </h2>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleSort('balance')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${sortField === 'balance' ? 'bg-[#c9a96e] text-black border-[#c9a96e]' : 'bg-black/40 border-white/10 text-gray-400'}`}
                >
                  <ArrowUpDown className="w-3.5 h-3.5" /> Sort by Balance
                </button>
                <button 
                  onClick={() => toggleSort('date')}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${sortField === 'date' ? 'bg-[#c9a96e] text-black border-[#c9a96e]' : 'bg-black/40 border-white/10 text-gray-400'}`}
                >
                  <ArrowUpDown className="w-3.5 h-3.5" /> Sort by Date
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              {filteredBoxes.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-sm">No registered wooden boxes found in localStorage.</p>
                </div>
              ) : (
                <table className="w-full text-left text-sm text-gray-300">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 font-semibold">
                      <th className="pb-3 pt-2">Box ID</th>
                      <th className="pb-3 pt-2">Owner Name</th>
                      <th className="pb-3 pt-2 text-right">Current Balance</th>
                      <th className="pb-3 pt-2">Goal Settings</th>
                      <th className="pb-3 pt-2 text-center">Progress</th>
                      <th className="pb-3 pt-2 text-right">Last Activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredBoxes.map((box) => (
                      <tr key={box.boxId} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 font-mono text-white text-xs">{box.boxId}</td>
                        <td className="py-4">
                          <p className="font-bold text-white">{box.owner.name}</p>
                          <p className="text-xs text-gray-400">{box.owner.phone}</p>
                        </td>
                        <td className="py-4 text-right font-bold text-[#c9a96e] text-base">{formatCurrency(box.balance)}</td>
                        <td className="py-4">
                          {box.goal ? (
                            <div>
                              <p className="font-semibold text-white">{box.goal.name}</p>
                              <p className="text-xs text-gray-400">Target: {formatCurrency(box.goal.targetAmount)}</p>
                            </div>
                          ) : (
                            <span className="text-gray-500 italic text-xs">No goal set</span>
                          )}
                        </td>
                        <td className="py-4">
                          {box.goal ? (
                            <div className="flex flex-col items-center justify-center gap-1 max-w-[120px] mx-auto">
                              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${getProgressPercentage(box)}%` }}></div>
                              </div>
                              <span className="text-xs text-green-400 font-bold">{getProgressPercentage(box)}%</span>
                            </div>
                          ) : (
                            <p className="text-center text-gray-600">-</p>
                          )}
                        </td>
                        <td className="py-4 text-right text-xs text-gray-400">{getLastActivityDate(box)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
