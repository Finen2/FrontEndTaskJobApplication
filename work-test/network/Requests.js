// Authentication =====================================================================================

export async function authenticationInital(email, password) {
  const authRequest = await fetch('https://beta.stockzoom.com/api-token-auth/', {
      method: 'POST',
      body: JSON.stringify({
        "email": email,
        "password": password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const authRespons = await authRequest.json();
    return localStorage.setItem('token', authRespons.token)
  }


export async function refresh() {
  const token = localStorage.getItem('token')
  const refreshRequest = await fetch('https://beta.stockzoom.com/api-token-refresh/', {
      method: 'POST',
      body: JSON.stringify({
        "token": token,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    const refreshRespons = await refreshRequest.json();
    return localStorage.setItem('refreshToken', refreshRespons.token)
}


export async function tokenVerify() {
  const token = localStorage.getItem('token')
  const verifyRequest = await fetch('https://beta.stockzoom.com/api-token-verify/', {
      method: 'POST',
      body: JSON.stringify({
        "token": token,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    const verifyRespons = await verifyRequest.json();
    return verifyRespons.token;
}

// User specific =====================================================================================

export async function portfolioList() {
  const token = localStorage.getItem('token')
  const portfolioListRequest = await fetch('https://beta.stockzoom.com/api/v1/me/portfolios/', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    return await portfolioListRequest.json()
}
