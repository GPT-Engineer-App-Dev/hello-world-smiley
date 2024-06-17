import { useEvents } from '../integrations/supabase';
import { Container, Heading, List, ListItem, Spinner, Text } from '@chakra-ui/react';

const Events = () => {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading events</Text>;

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" mb={4}>Events</Heading>
      <List spacing={3}>
        {events.map(event => (
          <ListItem key={event.id}>
            <Text fontSize="xl" fontWeight="bold">{event.name}</Text>
            <Text>{new Date(event.date).toLocaleDateString()}</Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Events;