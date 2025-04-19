import { Box, Button, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";


const StakingRewards = () => {
  const [tabValue, setTabValue] = useState(0);
  
  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: 'grey.100',
      }}
    >
      <CardContent>
        <Box>
          <Typography variant="h5" component="div" color="text.primary">
            Your Staking Rewards
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: '0.875rem', lineHeight: 0 }}
          >
            Track and claim your earned rewards
          </Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
            <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
              <Tab label="Active Stake" />
              <Tab label="History" />
            </Tabs>
          </Box>
          <Box sx={{ py: 2 }}>
            <Box sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {tabValue === 0
                  ? 'You have 0 ELO tokens staked'
                  : 'Your staking history will appear here'}
              </Typography>
              <Button sx={{ borderRadius: 2 }} variant="contained" fullWidth disabled>
                Connect Wallet to View
              </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StakingRewards;