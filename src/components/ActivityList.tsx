import { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Slider,
  Box,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Activity } from '../types/activity';

interface ActivityListProps {
  activities: Activity[];
  onDelete: (id: string) => void;
}

export default function ActivityList({ activities, onDelete }: ActivityListProps) {
  return (
    <Box sx={{ mt: 2, pl: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        活动日志
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem
            key={activity.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => onDelete(activity.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1">{activity.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(activity.date).toLocaleString()}
                  </Typography>
                </Box>
              }
              secondary={
                <Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <Typography variant="body2" sx={{ mr: 1 }}>
                      能量值：
                    </Typography>
                    <Slider
                      value={activity.energyLevel}
                      readOnly
                      step={1}
                      marks
                      min={-2}
                      max={2}
                      valueLabelDisplay="auto"
                      sx={{ width: '50%' }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <Typography variant="body2" sx={{ mr: 1 }}>
                      投入度：
                    </Typography>
                    <Slider
                      value={activity.engagement}
                      readOnly
                      step={1}
                      marks
                      min={1}
                      max={5}
                      valueLabelDisplay="auto"
                      sx={{ width: '50%' }}
                    />
                  </Box>
                  {activity.notes && (
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      备注：{activity.notes}
                    </Typography>
                  )}
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}