import { Fragment, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import StackingForm from '../../components/stake/StackingForm';
import { Button, Card, CardContent, Grid, Tab, Tabs } from '@mui/material';
import StakingForm from '../../components/stake/StackingForm';

export const stakingTiers = {
  bronze: {
    name: "Bronze",
    apr: 5,
    minAmount: 1000,
    maxAmount: 10000,
  },
  silver: {
    name: "Silver",
    apr: 8,
    minAmount: 10001,
    maxAmount: 50000,
  },
  gold: {
    name: "Gold",
    apr: 12,
    minAmount: 50001,
    maxAmount: 100000,
  },
  platinum: {
    name: "Platinum",
    apr: 18,
    minAmount: 100001,
    maxAmount: Number.POSITIVE_INFINITY,
  },
}

export default function Stake() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Fragment>
      <Container>
        <Box sx={{ mb: 4, py: 2 }}>
          <Typography
            color="text.primary"
            variant="h2"
            sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main', textAlign: 'center' }}
            component="div"
          >
            Stake $ELO
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 2, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
          >
            Stake $ELO to earn more $ELO. You can stake $ELO tokens in the staking pools to earn
            high APR as a return for holding $ELO tokens.
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: 'neutral.main',
          py: 5,
          mb: 4,
        }}
      >
        <Container className="fadeInUp">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={7}>
              <Card
                variant="outlined"
                sx={{
                  borderColor: 'grey.100',
                }}
              >
                <CardContent>
                  <Box>
                    <Typography variant="h5" component="div" color="text.primary" sx={{ mb: 1 }}>
                      Stake Your Tokens
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: '0.875rem', lineHeight: 0 }}
                    >
                      Please be aware estimated APRs will likely drop over time as more people join
                      the pool. First you must approve you've $ for use on the staking contract,
                      then enter an amount and press stake.
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
                        <Tab label="Stake" />
                        <Tab label="Unstake" />
                      </Tabs>
                    </Box>
                    <Box sx={{ py: 2 }}>
                      {tabValue === 0 ? (
                        <StakingForm stakingTiers={stakingTiers} />
                      ) : (
                        <Box sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Typography variant="body2" color="text.secondary">
                            You have 0 ELO tokens staked
                          </Typography>
                          <Button sx={{borderRadius:'5px'}} variant="contained" fullWidth disabled>
                            Connect Wallet to Unstake
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}></Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
