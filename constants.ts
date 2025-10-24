
import type { ConversionPair } from './types';

// Conversion factors based on 1 Foot
const FEET_TO_INCHES = 12;
const FEET_TO_METERS = 0.3048;
const FEET_TO_MILLIMETERS = 304.8;
const FEET_TO_CENTIMETERS = 30.48;

export const CONVERSION_PAIRS: ConversionPair[] = [
  {
    id: 'ft-in',
    unitA: 'Feet',
    unitB: 'Inch',
    aToBConversionFactor: FEET_TO_INCHES,
  },
  {
    id: 'ft-m',
    unitA: 'Feet',
    unitB: 'Meter',
    aToBConversionFactor: FEET_TO_METERS,
  },
  {
    id: 'ft-mm',
    unitA: 'Feet',
    unitB: 'Millimeter',
    aToBConversionFactor: FEET_TO_MILLIMETERS,
  },
  {
    id: 'ft-cm',
    unitA: 'Feet',
    unitB: 'Centimeter',
    aToBConversionFactor: FEET_TO_CENTIMETERS,
  },
];
