import { Suspense } from 'react';
import UserProfile from '../../components/UserProfile'; // Adjust the path based on your project structure

const ProfilePage = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <UserProfile params={params} />
    </Suspense>
  );
};

// Get the user ID from the URL
export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      params: { id }, // Pass the user ID to the component as a prop
    },
  };
}

export default ProfilePage;