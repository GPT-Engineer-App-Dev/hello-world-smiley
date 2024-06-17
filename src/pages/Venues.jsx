import { useVenues } from '../integrations/supabase';
import { Container, Heading, List, ListItem, Spinner, Text } from '@chakra-ui/react';

const Venues = () => {
  const { data: venues, isLoading, error } = useVenues();

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading venues</Text>;

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" mb={4}>Venues</Heading>
      <List spacing={3}>
        {venues.map(venue => (
          <ListItem key={venue.id}>
            <Text fontSize="xl" fontWeight="bold">{venue.name}</Text>
            <Text>Capacity: {venue.capacity}</Text>
            <Text>Type: {venue.type}</Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Venues;