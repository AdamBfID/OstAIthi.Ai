import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Row {
  Horodateur: string;
  "1. Âge :": string;
  "2. Genre :": string;
  "3. Dans quelle région êtes-vous basé(e) ?": string;
  "4. Profession :": string;
  "5. A quel type d'établissement appartenez-vous ?": string;
  "6. Niveau déducation  :": string;
  "7. Votre moyenne l'année précédente :": string;
  "1. Avez-vous déjà entendu parler de l'intelligence artificielle (IA) ?": string;
}

const Dataset: React.FC = () => {
  const [data, setData] = useState<Row[]>([]);
  const [filterAge, setFilterAge] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [filterSecteur, setFilterSecteur] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./src/assets/data.csv'); // Replace with the actual path
      const text = await response.text();
      const rows = text.split('\n').slice(1); // Skip header
      const parsedData: Row[] = rows.map((row) => {
        const [
          Horodateur,
          age,
          genre,
          region,
          profession,
          secteur,
          niveau,
          moyenne,
          IAConnaissane
        ] = row.split(',');
        return {
          Horodateur,
          "1. Âge :": age,
          "2. Genre :": genre,
          "3. Dans quelle région êtes-vous basé(e) ?": region,
          "4. Profession :": profession,
          "5. A quel type d'établissement appartenez-vous ?": secteur,
          "6. Niveau déducation  :": niveau,
          "7. Votre moyenne l'année précédente :": moyenne,
          "1. Avez-vous déjà entendu parler de l'intelligence artificielle (IA) ?" : IAConnaissane,
        };
      });
      setData(parsedData);
    };

    fetchData();
  }, []);

  // Filter data based on criteria
  const filteredData = data.filter((row) => {
    return (
      (filterAge === '' || row['1. Âge :'] === filterAge) &&
      (filterRegion === '' || row['3. Dans quelle région êtes-vous basé(e) ?'] === filterRegion) &&
      (filterSecteur === '' || row['5. A quel type d\'établissement appartenez-vous ?'] === filterSecteur) &&
      (searchTerm === '' || row['4. Profession :'].toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-6">
      {/* Filter Bar */}
      <div className="flex gap-4 mb-4">
        {/* Age Filter */}
        <Select onValueChange={(value) => setFilterAge(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Age" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12-18 ans">12-18 ans</SelectItem>
            <SelectItem value="18-25 ans">18-25 ans</SelectItem>
          </SelectContent>
        </Select>

        {/* Region Filter */}
        <Select onValueChange={(value) => setFilterRegion(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tunis">Tunis</SelectItem>
            <SelectItem value="Nabeul">Nabeul</SelectItem>
            <SelectItem value="Kasserine">Kasserine</SelectItem>
            <SelectItem value="La Manouba">La Manouba</SelectItem>
          </SelectContent>
        </Select>

        {/* Secteur Filter */}
        <Select onValueChange={(value) => setFilterSecteur(value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Secteur" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Public">Public</SelectItem>
            <SelectItem value="Privé">Privé</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Input */}
        <Input
          placeholder="Search Profession"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64"
        />
      </div>

      {/* Data Table */}
      <div className="border rounded-md">
      <Table className="table-auto w-full border-collapse border border-gray-200">
      <TableHeader>
        <TableRow className="bg-gray-100 text-left">
          
          <TableHead className="px-4 py-2 border-b border-gray-200">Âge</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">Genre</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">Région</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">Profession</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">Secteur</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">Niveau</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">Moyenne</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">IA Connaissance</TableHead>
          <TableHead className="px-4 py-2 border-b border-gray-200">Degré de Connaissance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredData.map((row, index) => (
          <TableRow key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row.Horodateur}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['1. Âge :']}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['2. Genre :']}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['3. Dans quelle région êtes-vous basé(e) ?']}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['4. Profession :']}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['5. A quel type d\'établissement appartenez-vous ?']}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['6. Niveau déducation  :']}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['7. Votre moyenne l\'année précédente :']}</TableCell>
            <TableCell className="px-4 py-2 border-b border-gray-200">{row['1. Avez-vous déjà entendu parler de l\'intelligence artificielle (IA) ?']}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </div>
    </div>
  );
};

export default Dataset;
