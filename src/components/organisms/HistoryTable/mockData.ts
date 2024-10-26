interface TableData {
  id: number;
  date: string;
  timeSlot: string;
  name: string;
  tableNumber: string;
  tableType: string;
  numPeople: string;
  numChairs: string;
  tablePrice: string;
  menuItems: string;
  totalMenuPrice: string;
  finalAmount: string;
}

export const tableData: TableData[] = [];

for (let i = 0; i < 5; i++) {
  tableData.push({
    id: i + 1,
    date: "2024-10-12",
    timeSlot: "18:00",
    name: "John Doe",
    tableNumber: "5",
    tableType: "VIP",
    numPeople: "4",
    numChairs: "4",
    tablePrice: "100",
    menuItems: "Pizza, Pasta",
    totalMenuPrice: "30",
    finalAmount: "130",
  });
}

for (let i = 0; i < 5; i++) {
  tableData.push({
    id: i + 1,
    date: "2024-10-12",
    timeSlot: "18:00",
    name: "Tom Doe",
    tableNumber: "5",
    tableType: "VIP",
    numPeople: "4",
    numChairs: "4",
    tablePrice: "100",
    menuItems: "Pizza, Pasta",
    totalMenuPrice: "30",
    finalAmount: "130",
  });
}
