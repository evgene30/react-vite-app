import React, { FC } from 'react';
import { Stack, Pagination } from '@mui/material';
import { paginationStyles } from '@/components/pagination/styles';

type TPaginationComponent = {
  page: number;
  setPage: (item: number) => void;
};

export const PaginationComponent: FC<TPaginationComponent> = ({
  page,
  setPage,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} sx={paginationStyles}>
      <Pagination
        count={7}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};
