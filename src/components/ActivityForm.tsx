import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Slider,
  Stack,
} from '@mui/material';
import { ActivityFormData } from '../types/activity';

interface ActivityFormProps {
  onSubmit: (data: ActivityFormData) => void;
}

export default function ActivityForm({ onSubmit }: ActivityFormProps) {
  const [formData, setFormData] = useState<ActivityFormData>({
    name: '',
    energyLevel: 0,
    engagement: 3,
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      energyLevel: 0,
      engagement: 3,
      notes: '',
    });
  };

  return (
    <Box sx={{ mb: 2, pl: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        今天干了什么？
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="活动名称"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            fullWidth
            variant="standard"
            sx={{ width: { xs: '100%', md: '50%' } }}
          />
          <Box>
            <Typography component="legend">能量值</Typography>
            <Slider
              value={formData.energyLevel}
              onChange={(_, value) => setFormData({ ...formData, energyLevel: value as number })}
              step={1}
              marks
              min={-2}
              max={2}
              valueLabelDisplay="auto"
              sx={{
                width: { xs: '100%', md: '50%' },
                '& .MuiSlider-thumb': {
                  height: 24,
                  width: 24,
                  backgroundColor: '#fff'
                }
              }}
            />
          </Box>
          <Box>
            <Typography component="legend">投入度</Typography>
            <Slider
              value={formData.engagement}
              onChange={(_, value) => setFormData({ ...formData, engagement: value as number })}
              step={1}
              marks
              min={1}
              max={5}
              valueLabelDisplay="auto"
              sx={{
                width: { xs: '100%', md: '50%' },
                '& .MuiSlider-thumb': {
                  height: 24,
                  width: 24,
                  backgroundColor: '#fff'
                }
              }}
            />
          </Box>
          <TextField
            label="备注"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            fullWidth
            variant="standard"
            sx={{ width: { xs: '100%', md: '50%' } }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ width: { xs: '100%', md: '50%' } }}
          >
            新增
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}