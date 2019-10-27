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
    return console.log(authRespons.token);
}


export async function refresh(token) {
  const refreshRequest = await fetch('https://beta.stockzoom.com/api-token-refresh/', {
      method: 'POST',
      body: JSON.stringify({
        "token": "string",
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    const refreshRespons = await refreshRequest.json();
    return console.log(refreshRespons);
}


export async function tokenVerify(token) {
  const verifyRequest = await fetch('https://beta.stockzoom.com/api-token-verify/', {
      method: 'POST',
      body: JSON.stringify({
        "token": "string",
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    const verifyRespons = await verifyRequest.json();
    return console.log(verifyRespons);
}

// User specific =====================================================================================

const tokenTest = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMTc1NDYsInVzZXJuYW1lIjoid2FycmVuLmJ1ZmZldEB3aWxsYW5kc2tpbGwuc2UiLCJleHAiOjE1NzMzMzY5MDcsImVtYWlsIjoid2FycmVuLmJ1ZmZldEB3aWxsYW5kc2tpbGwuc2UiLCJvcmlnX2lhdCI6MTU3MjEyNzMwN30.0IBurK5tGNn5pwVBcCJg6xdL0BDBgElXD2xXC5PnVFw'

export async function portfolioList() {
  const jwtRespons = await fetch('https://beta.stockzoom.com/api/v1/me/portfolios/', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenTest}`
      },
    });
    const jwtLoginResponse = await jwtRespons.json();
    return console.log(jwtLoginResponse);
}


export async function portfolioDetails(token, altas) {
  const jwtRespons = await fetch('https://beta.stockzoom.com/api/v1/me/portfolios/' + altas, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    const jwtLoginResponse = await jwtRespons.json();
    return console.log(jwtLoginResponse);
}


export async function instrumentDetail(token, altas) {
  const jwtRespons = await fetch('https://beta.stockzoom.com/api/v1/instruments/' + altas, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    const jwtLoginResponse = await jwtRespons.json();
    return console.log(jwtLoginResponse);
}
