import { Button, styled } from '@mui/material'

export const StyledEditButton = styled(Button)(({ theme }) => ({
  padding: '5px',
  borderRadius: '5px',
  backgroundColor: theme.palette.primary.main,
}))

export const StyledDeleteButton = styled(Button)(({ theme }) => ({
  padding: '5px',
  borderRadius: '5px',
  backgroundColor: theme.palette.error.main,
}))
