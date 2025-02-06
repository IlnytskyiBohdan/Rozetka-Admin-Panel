import { TableCell, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SortableTableHeader = ({ label, sortKey, isNumeric, sortConfig, onSort }) => {
  const isActive = sortConfig.key === sortKey;
  const direction =
    isActive && sortConfig.direction === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;

  return (
    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
      {label}
      <IconButton size="small" sx={{ color: "white" }} onClick={() => onSort(sortKey, isNumeric)}>
        {direction}
      </IconButton>
    </TableCell>
  );
};

export default SortableTableHeader;