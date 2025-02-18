import {
  List,
  ListItem,
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
    <Box sx={{ mt: 4, pl: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        干了这些事儿
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem
            key={activity.id}
            sx={{ py: 2, flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <Box width="100%" mb={2} display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" flexGrow={1} mr={2}>
                <Typography variant="subtitle1" sx={{ mr: 2, fontWeight: 500 }}>{activity.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0 }}>
                  {new Date(activity.date).toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
                </Typography>
              </Box>
            </Box>
            <Box width="100%" position="relative">
              <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="body2" sx={{ minWidth: '4em' }}>
                  能量值：
                </Typography>
                <Box flex={1} position="relative" display="flex" alignItems="center">
                  <Slider
                    value={activity.energyLevel}
                    disabled
                    step={1}
                    marks
                    min={-2}
                    max={2}
                    valueLabelDisplay="auto"
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      '& .MuiSlider-thumb': {
                        height: 24,
                        width: 24,
                        backgroundColor: '#fff',
                        border: '2px solid #9b9297'
                      },
                      '& .MuiSlider-track': {
                        height: 4,
                        backgroundColor: '#9b9297'
                      },
                      '& .MuiSlider-rail': {
                        height: 4,
                        backgroundColor: '#e0e0e0'
                      },
                      '& .MuiSlider-mark': {
                        backgroundColor: '#9b9297',
                        width: 6,
                        height: 6,
                        borderRadius: '50%'
                      },
                      '& .MuiSlider-markActive': {
                        backgroundColor: '#fff'
                      }
                    }}
                  />
                  <IconButton
                    edge="end"
                    onClick={() => onDelete(activity.id)}
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      p: 1,
                      ml: { xs: 2, md: 4 },
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)'
                      }
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body2" sx={{ minWidth: '4em' }}>
                  投入度：
                </Typography>
                <Box flex={1} position="relative">
                  <Slider
                    value={activity.engagement}
                    disabled
                    step={1}
                    marks
                    min={1}
                    max={5}
                    valueLabelDisplay="auto"
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      '& .MuiSlider-thumb': {
                        height: 24,
                        width: 24,
                        backgroundColor: '#fff',
                        border: '2px solid #9b9297',
                        '&:hover': {
                          boxShadow: 'none'
                        }
                      },
                      '& .MuiSlider-track': {
                        height: 4,
                        backgroundColor: '#9b9297'
                      },
                      '& .MuiSlider-rail': {
                        height: 4,
                        backgroundColor: '#e0e0e0'
                      },
                      '& .MuiSlider-mark': {
                        backgroundColor: '#9b9297',
                        width: 6,
                        height: 6,
                        borderRadius: '50%'
                      },
                      '& .MuiSlider-markActive': {
                        backgroundColor: '#fff'
                      }
                    }}
                  />
                </Box>
              </Box>
              {activity.notes && (
                <Box display="flex" alignItems="center" mt={2}>
                  <Typography variant="body2" sx={{ minWidth: '4em' }} color="text.secondary">
                    备注：
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.notes}
                  </Typography>
                </Box>
              )}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}