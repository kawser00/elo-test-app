import { Box, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

export default function StakingStats({ stakingTiers }) {
  const stats= {
    totalValueLocked: '12,458,932',
    numberOfStakers: '3,245',
    averageStakingPeriod: '92',
    currentApr: stakingTiers.bronze.apr.toString(),
    rewardsDistributed: '245,789',
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: 'grey.100',
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" component="div" color="text.primary">
            Staking Statistics
          </Typography>
        }
        subheader={
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: '0.875rem', lineHeight: 0 }}
          >
            Current staking metrics
          </Typography>
        }
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Total Value Locked
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {stats.totalValueLocked} ELO
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Number of Stakers
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {stats.numberOfStakers}
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Average Staking Period
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {stats.averageStakingPeriod} days
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Current APR
            </Typography>
            <Typography variant="body1" fontWeight="medium" sx={{ color: 'success.main' }}>
              {stats.currentApr}%
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" color="text.secondary">
              Rewards Distributed
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              {stats.rewardsDistributed} ELO
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
