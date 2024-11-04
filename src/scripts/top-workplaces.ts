import axios from 'axios';

interface Workplace {
  name: string;
  shifts: number;
}

async function fetchWorkplaces(): Promise<Workplace[]> {
  try {
    const response = await axios.get<Workplace[]>('https://api.example.com/workplaces'); // Replace with actual API URL
    return response.data;
  } catch (error) {
    console.error('Error fetching workplace data:', error);
    throw error;
  }
}

function getTopWorkplaces(workplaces: Workplace[]): Workplace[] {
  return workplaces
    .sort((a, b) => b.shifts - a.shifts)
    .slice(0, 3);
}

async function main() {
  try {
    const workplaces = await fetchWorkplaces();
    const topWorkplaces = getTopWorkplaces(workplaces);
    console.log(JSON.stringify(topWorkplaces, null, 2));
  } catch (error) {
    console.error('Failed to retrieve and process workplace data:', error);
  }
}

main();
