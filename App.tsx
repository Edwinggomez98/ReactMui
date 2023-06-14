import * as React from 'react';

import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={'x'} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function App() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div style={{ margin: 20 }}>
        <Typography>Presciption and shipping</Typography>
        {/* Box */}
        <div
          style={{
            border: '2px solid #c3c3c3',
            maxWidth: 'auto',
            padding: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Issued on: 05/05/2023</Typography>
            <Typography>60 mg Troche</Typography>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Status: Active</Typography>
            <Typography>Flavor: Mint</Typography>
          </div>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Next refill: 02/03/2024</Typography>
            <Typography>Refills left: 2/5</Typography>
          </div>
        </div>
        {/* Accordion */}
        <div style={{ marginTop: '40px' }}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>001 - 24/01/2023</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                }}
              >
                <Typography>Shiped on:</Typography>
                <Typography>03/04/2023</Typography>
                <Typography style={{ marginTop: '1rem' }}>
                  Status: delivered
                </Typography>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>Shipped to:</Typography>
                    <Typography>123 Street</Typography>
                    <Typography>San Francisco,</Typography>
                    <Typography>CA</Typography>
                    <Typography>94123</Typography>
                    <Typography style={{ marginTop: '1rem' }}>
                      Traking URL: https://eee.dsadsadsadsa.asd
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>60 mg Troche</Typography>
                    <Typography>Refill left: 2/5</Typography>
                    <Typography>Flavor: Mint</Typography>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>002 - 24/01/2023</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                }}
              >
                <Typography>Shiped on:</Typography>
                <Typography>03/04/2023</Typography>
                <Typography style={{ marginTop: '1rem' }}>
                  Status: delivered
                </Typography>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>Shipped to:</Typography>
                    <Typography>123 Street</Typography>
                    <Typography>San Francisco,</Typography>
                    <Typography>CA</Typography>
                    <Typography>94123</Typography>
                    <Typography style={{ marginTop: '1rem' }}>
                      Traking URL: https://eee.dsadsadsadsa.asd
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>60 mg Troche</Typography>
                    <Typography>Refill left: 2/5</Typography>
                    <Typography>Flavor: Mint</Typography>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>001 - 24/01/2023</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
                }}
              >
                <Typography>Shiped on:</Typography>
                <Typography>03/04/2023</Typography>
                <Typography style={{ marginTop: '1rem' }}>
                  Status: delivered
                </Typography>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>Shipped to:</Typography>
                    <Typography>123 Street</Typography>
                    <Typography>San Francisco,</Typography>
                    <Typography>CA</Typography>
                    <Typography>94123</Typography>
                    <Typography style={{ marginTop: '1rem' }}>
                      Traking URL: https://eee.dsadsadsadsa.asd
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>60 mg Troche</Typography>
                    <Typography>Refill left: 2/5</Typography>
                    <Typography>Flavor: Mint</Typography>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default App;
