// StakingForm.jsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Slider,
  Box,
  Typography,
  Paper,
  FormControl,
  FormHelperText,
  Stack,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function StakingForm({ stakingTiers }) {
  const [amount, setAmount] = useState('1000');
  const [duration, setDuration] = useState(30);
  const [currentTier, setCurrentTier] = useState(stakingTiers.bronze);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const stakeAmount = Number.parseFloat(amount) || 0;

  // Update the tier and APR based on the amount
  useEffect(() => {
    // Validate amount
    if (amount === '') {
      setIsValidAmount(false);
      setErrorMessage(`Please enter an amount`);
      return;
    }

    if (isNaN(stakeAmount)) {
      setIsValidAmount(false);
      setErrorMessage(`Please enter a valid number`);
      return;
    }

    if (stakeAmount < stakingTiers.bronze.minAmount) {
      setIsValidAmount(false);
      setErrorMessage(`Minimum amount is ${stakingTiers.bronze.minAmount.toLocaleString()} ELO`);
      return;
    }

    setIsValidAmount(true);
    setErrorMessage('');

    // Set the appropriate tier
    if (stakeAmount >= stakingTiers.platinum.minAmount) {
      setCurrentTier(stakingTiers.platinum);
    } else if (stakeAmount >= stakingTiers.gold.minAmount) {
      setCurrentTier(stakingTiers.gold);
    } else if (stakeAmount >= stakingTiers.silver.minAmount) {
      setCurrentTier(stakingTiers.silver);
    } else {
      setCurrentTier(stakingTiers.bronze);
    }
  }, [amount, stakeAmount, stakingTiers]);

  // Calculate estimated rewards only if amount is valid
  const estimatedRewards = isValidAmount
    ? (stakeAmount * (currentTier.apr / 100) * (duration / 365)).toFixed(2)
    : '0.00';

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDurationChange = (_event, newValue) => {
    setDuration(newValue);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Stack spacing={3}>
        <FormControl error={!isValidAmount} fullWidth>
          <Typography color="text.primary" variant="subtitle2" gutterBottom>
            Amount to Stake (ELO)
          </Typography>
          <TextField
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            error={!isValidAmount}
            fullWidth
            size="small"
            variant="outlined"
            sx={{
              input: { color: 'text.primary' },
              '& input::placeholder': { color: 'text.primary' },
            }}
          />
          {!isValidAmount && (
            <FormHelperText sx={{ display: 'flex', alignItems: 'center' }}>
              <ErrorOutlineIcon fontSize="small" sx={{ mr: 0.5, fontSize: 16 }} />
              {errorMessage}
            </FormHelperText>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
            <Typography variant="caption" color="text.secondary">
              Min: {stakingTiers.bronze.minAmount.toLocaleString()} ELO
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Balance: 0 ELO
            </Typography>
          </Box>
        </FormControl>

        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography color="text.primary" variant="subtitle2">Staking Period: {duration} days</Typography>
            <Typography variant="caption" color="text.secondary">
              {isValidAmount ? (
                <>
                  Current Tier:{' '}
                  <Box component="span" sx={{ fontWeight: 'medium', color: 'primary.main' }}>
                    {currentTier.name}
                  </Box>{' '}
                  ({currentTier.apr}% APR)
                </>
              ) : (
                'Enter valid amount to see tier'
              )}
            </Typography>
          </Box>
          <Slider
            value={duration}
            onChange={handleDurationChange}
            min={7}
            max={365}
            step={1}
            aria-label="Duration"
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" color="text.secondary">
              7 days
            </Typography>
            <Typography variant="caption" color="text.secondary">
              365 days
            </Typography>
          </Box>
        </Box>

        <Paper sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">Estimated Rewards:</Typography>
            <Typography variant="body2" fontWeight="medium">
              {estimatedRewards} ELO
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">Unlock Date:</Typography>
            <Typography variant="body2" fontWeight="medium">
              {new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </Typography>
          </Box>
        </Paper>

        <Stack spacing={2}>
          <Button
            variant="contained"
            fullWidth
            disabled={!isValidAmount}
            sx={{
              bgcolor: 'warning.main',
              color: 'common.black',
              borderRadius: 2,
              '&:hover': { bgcolor: 'warning.dark' },
            }}
          >
            Approve you've $
          </Button>
          <Button variant="contained" fullWidth disabled={!isValidAmount} sx={{ borderRadius: 2 }}>
            Stake
          </Button>
          <Typography variant="caption" align="center" color="text.secondary">
            First approve you've $ for use on the staking contract, then stake your tokens
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
