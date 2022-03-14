import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AgendaContext } from '../Providers/Agenda'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function IconeAgenda() {
  const { carrinho } = React.useContext(AgendaContext)
  console.log()
  return (<>
  
    <IconButton data-bs-toggle="modal" data-bs-target="#exampleModal">
      <StyledBadge badgeContent={carrinho.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  </>
  );
}