// import axios from "axios"



// export async function registerUser(request) {
//   const data = await formToObj(request)
//   return await axios.post('/api/register', data, {
//     validateStatus: () => true
//   })

// }



// export async function loginUser(request){
//   const data = await formToObj(request)
//   return await axios.post('/api/login', data, {
//     validateStatus: () => true
//   })
// }

// async function formToObj(request) {
//   const formData = await request.formData()
//   return Object.fromEntries(formData.entries())
// }

import axios from "axios";

export async function registerUser(request) {
  try {
    const data = await formToObj(request);
    const response = await axios.post('/api/register', data, {
      validateStatus: () => true
    });

    if (response.status === 201) {
      return response.data.token;
    } else {
      // Handle registration failure, e.g., show an error message
      console.error('Registration failed:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error during registration:', error);
    return null;
  }
}

export async function loginUser(request) {
  try {
    const data = await formToObj(request);
    const response = await axios.post('/api/login', data, {
      validateStatus: () => true
    });

    if (response.status === 202) {
      return response.data.token;
    } else {
      // Handle login failure, e.g., show an error message
      console.error('Login failed:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error during login:', error);
    return null;
  }
}

async function formToObj(request) {
  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

