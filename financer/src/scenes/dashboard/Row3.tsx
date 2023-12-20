import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DAshboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridCellParams } from "@mui/x-data-grid/models";

type Props = {};

const Row3 = (props: Props) => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const productColumns = [
    {
      field: "_id",
      headername: "id",
      flex: 1,
    },
    {
      field: "expense",
      headername: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "expense",
      headername: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  return (
    <>
      <DashboardBox gridArea={"g"}>
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height={"75%"}
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={15}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea={"h"}></DashboardBox>
      <DashboardBox gridArea={"i"}></DashboardBox>
      <DashboardBox gridArea={"j"}></DashboardBox>
    </>
  );
};

export default Row3;
