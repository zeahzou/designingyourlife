import { useState, useEffect } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';
import { Activity, ActivityFormData } from './types/activity';
import './App.css';

function App() {
  const [activities, setActivities] = useState<Activity[]>(() => {
    const saved = localStorage.getItem('activities');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = (data: ActivityFormData) => {
    const newActivity: Activity = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setActivities([newActivity, ...activities]);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <ActivityForm onSubmit={handleAddActivity} />
          <ActivityList 
            activities={activities}
            onDelete={handleDeleteActivity}
          />
        </Box>
      </Container>
    </>
  )
}

export default App
