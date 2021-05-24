const baseUrl = 'https://gorest.co.in/public-api/';
export const usersEndpoint = 'users';
export const tasksUrlEndpoint = (id) => `todos?user_id=${id}`;
export const newUserUrl = 'https://gorest.co.in/public-api/users';
const auth = process.env.REACT_APP_API_AUTH;


export const fetchData = async (userId, action, opts) => {
  const res = await fetch(`https://gorest.co.in/public-api/todos?user_id=${userId}`, opts);
  const json = await res.json();
  action(json.data);
};

export const postData = async (dataToSend, action, id) => {
  await fetch(`${baseUrl}${id}`,
    {
      method: 'POST',
      headers: {
        Authorization: auth,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        dataToSend,
      ),
    }).then((res) => res.json())
    .then((res) => action(res));
};

export const patchData = async (dataToSend, action, id) => {
  await fetch(`https://gorest.co.in/public-api/todos/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: auth,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        dataToSend,
      ),
    }).then((res) => res.json())
    .then((res) => action(res));
};

export const deleteData = async (id, action) => {
  await fetch(`https://gorest.co.in/public-api/todos/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: auth,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
    .then((res) => action(res));

};

export const alertTrigger = (condition, history) => condition && setTimeout(() => {
  history.push('/Tasks');
}, 2000);
