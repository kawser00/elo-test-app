import { Box, Card, CardContent, CardHeader, LinearProgress, Typography } from '@mui/material';

export default function StakingTiers({ stakingTiers }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: 'grey.100',
        mt: 4,
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" component="div" color="text.primary">
            Staking Tiers
          </Typography>
        }
        subheader={
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: '0.875rem', lineHeight: 0 }}
          >
            Higher tiers offer better rewards
          </Typography>
        }
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {Object.entries(stakingTiers).map(([key, tier]) => (
            <Box key={key} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle2" color="text.primary">
                  {tier.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tier.apr}% APR
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={100}
                sx={{ height: 8, borderRadius: 1 }}
              />
              <Typography variant="caption" color="text.secondary">
                {tier.name === 'Platinum'
                  ? `${tier.minAmount.toLocaleString()}+ ELO`
                  : `${tier.minAmount.toLocaleString()} - ${tier.maxAmount.toLocaleString()} ELO`}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
