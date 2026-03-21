import { useState } from 'react';
import { Building2, FileText, Target } from 'lucide-react';

const companies = [
  { name: 'Amazon', type: 'Product', logo: '🟠', color: 'bg-orange-50 border-orange-200 text-orange-700' },
  { name: 'Google', type: 'Product', logo: '🔵', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { name: 'Microsoft', type: 'Product', logo: '🟦', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { name: 'NVIDIA', type: 'Product', logo: '🟢', color: 'bg-green-50 border-green-200 text-green-700' },
  { name: 'Oracle', type: 'Product', logo: '🔴', color: 'bg-red-50 border-red-200 text-red-700' },
  { name: 'PayPal', type: 'Product', logo: '🔵', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { name: 'TCS-Ninja', type: 'Service', logo: '🟣', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { name: 'TCS-CodeVita', type: 'Service', logo: '🟣', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { name: 'Accenture', type: 'Service', logo: '🟡', color: 'bg-yellow-50 border-yellow-200 text-yellow-700' },
  { name: 'Tech-Mahindra', type: 'Service', logo: '🔵', color: 'bg-blue-50 border-blue-200 text-blue-700' },
];

export const CompanyQuestions = () => {
  const [selectedType, setSelectedType] = useState<'All' | 'Product' | 'Service'>('All');

  const filteredCompanies = companies.filter(company => 
    selectedType === 'All' || company.type === selectedType
  );

  return (
    <div className="space-y-6 overflow-x-hidden">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Building2 className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Company Filter</h3>
        </div>
        
        <div className="flex gap-2">
          {['All', 'Product', 'Service'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type as 'All' | 'Product' | 'Service')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedType === type
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type} Companies
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <div
            key={company.name}
            className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 transform hover:-translate-y-1 ${company.color.replace('text-', 'border-').split(' ')[1]}`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">{company.logo}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{company.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${company.color}`}>
                  {company.type}-Based
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  Easy Questions
                </span>
                <span className="text-sm font-medium text-green-600">Coming Soon</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  Medium Questions
                </span>
                <span className="text-sm font-medium text-yellow-600">Coming Soon</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  Hard Questions
                </span>
                <span className="text-sm font-medium text-red-600">Coming Soon</span>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                  <FileText className="w-4 h-4 mr-1" />
                  {/* <link to="https://google.com" className='btn'>vew</link> */}
                  View Interview Tips
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};