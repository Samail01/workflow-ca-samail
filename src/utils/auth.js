// Function to log in a user
export async function login(email, password) {
  try {
    const response = await fetch('YOUR_AUTH_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      return data;
    } else {
      throw new Error(data.message || response.statusText);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// Function to log out a user
export function logout() {
  localStorage.removeItem('token');
}
