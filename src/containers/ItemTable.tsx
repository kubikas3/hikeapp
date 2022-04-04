import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { useField } from "formik";
import data from "../data.json";
import { Item, Season } from "../types";

export const ItemTable: React.FC = () => {
  const [{ value: distance }] = useField<number | null>("distance");
  const [{ value: season }] = useField<Season>("season");
  const [{ value: capacity }] = useField<number>("capacity");
  const supplies = data.essentials.concat(data[season]);
  const items: Item[] = [];
  let totalQuantity = 0;
  let totalWeight = 0;

  if (typeof distance === "number" && distance > 0) {
    for (let i of supplies) {
      const quantity = i.longevity ? Math.ceil(distance / i.longevity) : 1;
      const item: Item = {
        name: i.name,
        weight: i.weight,
        quantity: quantity,
      };

      totalQuantity += quantity;
      totalWeight += quantity * i.weight;
      items.push(item);
    }
  }

  return (
    <>
      {totalWeight > capacity && (
        <Alert severity="warning">
          Total weight exceeds backpack capacity — get a larger backpack or
          reduce distance.
        </Alert>
      )}
      <TableContainer component={Paper} sx={{ flex: "0 1 auto" }} elevation={2}>
        <Table sx={{ minWidth: 400 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Weight (kg)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">
                  {(item.quantity * item.weight).toFixed(1)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {items.length > 0 ? (
                <>
                  <TableCell>Total</TableCell>
                  <TableCell align="right">{totalQuantity}</TableCell>
                  <TableCell align="right">{totalWeight.toFixed(1)}</TableCell>
                </>
              ) : (
                <TableCell>No items, try changing the distance.</TableCell>
              )}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
