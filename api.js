import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com';

// GET request
async function get(endpoint) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// POST request
async function post(endpoint, data) {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// PATCH request
async function patch(endpoint, data) {
  try {
    const response = await axios.patch(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// DELETE request
async function del(endpoint) {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Usage example
async function sendMessage(message) {
  const response = await post('messages', { text: message });
  console.log(`Server response: ${response}`);
}

async function getMessage(id) {
  const response = await get(`messages/${id}`);
  console.log(`Server response: ${response}`);
}

async function updateMessage(id, newText) {
  const response = await patch(`messages/${id}`, { text: newText });
  console.log(`Server response: ${response}`);
}

async function deleteMessage(id) {
  const response = await del(`messages/${id}`);
  console.log(`Server response: ${response}`);
}