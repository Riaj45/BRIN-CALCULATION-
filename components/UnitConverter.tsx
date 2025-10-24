
import React, { useState } from 'react';
import type { Unit } from '../types';

interface UnitConverterProps {
  unitA: Unit;
  unitB: Unit;
  aToBConversionFactor: number;
}

const ExchangeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
);


export const UnitConverter: React.FC<UnitConverterProps> = ({
  unitA,
  unitB,
  aToBConversionFactor,
}) => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  const handleValueAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValueA(input);

    if (input === '' || isNaN(parseFloat(input))) {
      setValueB('');
      return;
    }

    const numValue = parseFloat(input);
    const convertedValue = numValue * aToBConversionFactor;
    setValueB(Number(convertedValue.toFixed(6)).toString());
  };

  const handleValueBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValueB(input);

    if (input === '' || isNaN(parseFloat(input))) {
      setValueA('');
      return;
    }

    const numValue = parseFloat(input);
    const convertedValue = numValue / aToBConversionFactor;
    setValueA(Number(convertedValue.toFixed(6)).toString());
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg p-6 hover:border-purple-500/50 transition-all duration-300">
      <h2 className="text-xl font-bold text-center mb-5 text-gray-300">
        {unitA} &harr; {unitB}
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Unit A Input */}
        <div className="w-full">
          <label htmlFor={`${unitA}-input`} className="block text-sm font-medium text-gray-400 mb-1">
            {unitA}
          </label>
          <input
            id={`${unitA}-input`}
            type="number"
            value={valueA}
            onChange={handleValueAChange}
            placeholder={`Enter value in ${unitA.toLowerCase()}`}
            className="w-full bg-gray-900/70 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
          />
        </div>

        <div className="hidden sm:block mt-6">
          <ExchangeIcon className="w-6 h-6 text-gray-500" />
        </div>

        {/* Unit B Input */}
        <div className="w-full">
          <label htmlFor={`${unitB}-input`} className="block text-sm font-medium text-gray-400 mb-1">
            {unitB}
          </label>
          <input
            id={`${unitB}-input`}
            type="number"
            value={valueB}
            onChange={handleValueBChange}
            placeholder={`Enter value in ${unitB.toLowerCase()}`}
            className="w-full bg-gray-900/70 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
          />
        </div>
      </div>
    </div>
  );
};
