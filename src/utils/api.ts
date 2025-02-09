const API_URL = "http://localhost:8080"; // Backend URL

export const registerUser = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    

    if (!response.ok) throw new Error("Registration failed");
  
    return response.text();
};

export const loginUser = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/UserLogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Login failed");

    return response.text(); // Assuming token is returned
};
