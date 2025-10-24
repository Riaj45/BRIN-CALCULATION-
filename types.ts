
export type Unit = 'Inch' | 'Feet' | 'Meter' | 'Millimeter' | 'Centimeter';

export interface ConversionPair {
  id: string;
  unitA: Unit;
  unitB: Unit;
  aToBConversionFactor: number;
}
