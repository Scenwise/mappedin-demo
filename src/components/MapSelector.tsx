import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface MapSelectorProps {
  value?: string;
  onSelect?: (mapId: string) => void;
}

export default function MapSelector({ value, onSelect }: MapSelectorProps) {
  const mappedInDemos = [
    { label: 'Airport', mapId: '6686b845c9f6d6000bc30300' },
    { label: 'Arena', mapId: '672a6f4f3a45ba000b893e1c' },
    { label: 'Community Centre', mapId: '660c0bb9ae0596d87766f2d9' },
    { label: 'Craft Show', mapId: '67bf60e9679a9d000bfacd6f' },
    { label: 'Event Space', mapId: '660c0c3aae0596d87766f2da' },
    { label: 'Grocery Store', mapId: '6679882a8298d5000b85ee89' },
    { label: 'Hospital', mapId: '67881b4666a208000badecc4' },
    { label: 'Mall - Consumer', mapId: '660c0c6e7c0c4fe5b4cc484c' },
    { label: 'Mall - Facility', mapId: '65c0ff7430b94e3fabd5bb8c' },
    { label: 'Multifamily Mid-Rise', mapId: '666ca6a48dd908000bf47803' },
    { label: 'Multifamily High-Rise', mapId: '67a6641530e940000bac3c1a' },
    { label: 'Office', mapId: '64ef49e662fd90fe020bee61' },
    { label: 'School', mapId: '65c12d9b30b94e3fabd5bb91' },
    { label: 'School - Multi Floor', mapId: '66686f1af06f04000b18b8fa' },
    { label: 'University Campus', mapId: '682e13a2703478000b567b66' },
    { label: 'Warehouse', mapId: '667b26b38298d5000b85eeb0' },
  ];

  return (
    <Select value={value} onValueChange={onSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Map" />
      </SelectTrigger>
      <SelectContent>
        {mappedInDemos.map(({ label, mapId }) => (
          <SelectItem key={mapId} value={mapId}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
