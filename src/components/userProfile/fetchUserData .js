// Function to simulate an API call that fetches user data
export const fetchUserData = () => {
  return new Promise((resolve) => {
    // Simulate delay for API response
    setTimeout(() => {
      const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1 123-456-7890",
      };
      resolve(userData);
    }, 1000); // Simulating a 1-second delay
  });
};
