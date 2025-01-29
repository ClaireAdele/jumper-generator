const signUpUser = async (username, email, password) => {

    try {
        const requestBody = { username, email, password };

        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(requestBody),
        });

        if (!res.ok) {
            const errorData = await res.json(); // Extract error message
            throw new Error(errorData.message || "Signup failed");
        }

        return await res.json();
    } catch (error) {
        throw error
    }
}

export { signUpUser };