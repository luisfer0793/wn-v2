export enum SortTypes {
  NAME = 'NAME',
  RAITING = 'RAITING',
}

export const SORT_CRITERIAS = [
  {
    value: SortTypes.NAME,
    label: 'Nombre',
  },
  {
    value: SortTypes.RAITING,
    label: 'Mejor valorados',
  },
] as const;
