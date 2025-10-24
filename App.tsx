
import React from 'react';
import { CONVERSION_PAIRS } from './constants';
import { UnitConverter } from './components/UnitConverter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-4xl text-center mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          BRIN CALCULATION
        </h1>
        <p className="mt-2 text-lg text-gray-400">Your Quick & Precise Unit Converter</p>
      </header>

      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CONVERSION_PAIRS.map((pair) => (
            <UnitConverter
              key={pair.id}
              unitA={pair.unitA}
              unitB={pair.unitB}
              aToBConversionFactor={pair.aToBConversionFactor}
            />
          ))}
        </div>
      </main>
       <footer className="w-full max-w-4xl text-center mt-12 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} BRIN CALCULATION. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
