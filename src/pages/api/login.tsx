export async function login(email: string, password: string) {
    try {
        const response = await fetch('https://salemate-be-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw new Error(result.message);
        }
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}
