<<<<<<< HEAD
const API = 'http://192.168.1.126:8000/api/category'
const SERVICES = 'http://192.168.1.126:8000/api/service'
=======
const API = 'http://192.168.168.27:8000/api/category'
>>>>>>> cf23d0d4f5dc2df7ec453c611b46f960a497d431
export const getTasks=async() => { 
    const res = await fetch(API)
    return await res.json()
}

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return await res.json();
  };
  
export const deleteTask = async (id_category) => {
    await fetch(`${API}/${id_category}`, {
      method: "DELETE",
    });
<<<<<<< HEAD
  };

  export const deleteService = async (id_service) => {
    await fetch(`${SERVICES}/${id_service}`, {
      method: "DELETE",
    });
  };

  export const getServices=async() => { 
    const res = await fetch(SERVICES)
    return await res.json()
}
=======
  };
>>>>>>> cf23d0d4f5dc2df7ec453c611b46f960a497d431
