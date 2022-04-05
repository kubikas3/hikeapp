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
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectCapacity,
  selectItems,
  selectTotalQuantity,
  selectTotalWeight,
  setItems,
} from "../app/slices/backpackSlice";
import { selectDistance, selectSeason } from "../app/slices/hikeSlice";
import data from "../data.json";
import { Item } from "../types";

export const Items: React.FC = () => {
  const dispatch = useAppDispatch();
  const capacity = useAppSelector(selectCapacity);
  const distance = useAppSelector(selectDistance);
  const season = useAppSelector(selectSeason);
  const items = useAppSelector(selectItems);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalWeight = useAppSelector(selectTotalWeight);
  const supplies = data.essentials.concat(data[season]);

  useEffect(() => {
    const items: Item[] = [];

    if (distance > 0) {
      for (let i of supplies) {
        const quantity = i.longevity ? Math.ceil(distance / i.longevity) : 1;
        const item: Item = {
          name: i.name,
          weight: i.weight,
          quantity: quantity,
        };

        items.push(item);
      }
    }

    dispatch(setItems(items));
  }, [distance, season, capacity]);

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
