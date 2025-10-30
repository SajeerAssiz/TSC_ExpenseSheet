import { Client } from '@microsoft/microsoft-graph-client';

/**
 * Creates an authenticated Microsoft Graph client
 * @param {string} accessToken - The access token from MSAL
 * @returns {Client} Microsoft Graph client instance
 */
export function getGraphClient(accessToken) {
  return Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    }
  });
}

/**
 * Fetches all users from the Office 365 tenant
 * @param {string} accessToken - The access token from MSAL
 * @returns {Promise<Array>} Array of user objects
 */
export async function getAllUsers(accessToken) {
  const client = getGraphClient(accessToken);

  try {
    const response = await client
      .api('/users')
      .select('id,displayName,mail,jobTitle,department,officeLocation')
      .top(999) // Get up to 999 users (maximum per page)
      .get();

    return response.value;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * Fetches a user's photo from Microsoft Graph
 * @param {string} accessToken - The access token from MSAL
 * @param {string} userId - The user's ID
 * @returns {Promise<string|null>} Base64 encoded image or null if no photo
 */
export async function getUserPhoto(accessToken, userId) {
  const client = getGraphClient(accessToken);

  try {
    const photo = await client
      .api(`/users/${userId}/photo/$value`)
      .get();

    // Convert blob to base64
    const blob = new Blob([photo], { type: 'image/jpeg' });
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    // User might not have a photo
    if (error.statusCode === 404) {
      return null;
    }
    console.error(`Error fetching photo for user ${userId}:`, error);
    return null;
  }
}

/**
 * Fetches all users with their photos
 * @param {string} accessToken - The access token from MSAL
 * @returns {Promise<Array>} Array of users with photo URLs
 */
export async function getAllUsersWithPhotos(accessToken) {
  const users = await getAllUsers(accessToken);

  // Fetch photos for all users in parallel
  const usersWithPhotos = await Promise.all(
    users.map(async (user) => {
      const photoUrl = await getUserPhoto(accessToken, user.id);
      return {
        ...user,
        photoUrl
      };
    })
  );

  return usersWithPhotos;
}
